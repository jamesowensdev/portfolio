"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

type Point = { x: number; y: number; id: number };

export default function GeographicProfiling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [points, setPoints] = useState<Point[]>([]);

  // Expanded Parameters for Rossmo's Full Formula
  const [bufferZone, setBufferZone] = useState(60); // 'B'
  const [decayOutside, setDecayOutside] = useState(1.2); // 'f' (Decay outside buffer)
  const [decayInside, setDecayInside] = useState(1.2); // 'g' (Decay inside buffer)

  const [anchor, setAnchor] = useState<{
    x: number;
    y: number;
    score: number;
  } | null>(null);

  const [confidence, setConfidence] = useState(0);

  const GRID_SIZE = 8;

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Scale the DOM click coordinates to match the 800x600 canvas resolution
    const scaleX = 800 / rect.width;
    const scaleY = 600 / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    setPoints((prev) => [...prev, { x, y, id: Date.now() }]);
  };

  const clearData = () => {
    setPoints([]);
    setAnchor(null);
    setConfidence(0);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const calculateRossmo = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || points.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    let maxScore = 0;
    let bestX = 0;
    let bestY = 0;

    const gridScores: { x: number; y: number; score: number }[] = [];

    for (let x = 0; x < width; x += GRID_SIZE) {
      for (let y = 0; y < height; y += GRID_SIZE) {
        let score = 0;

        for (const p of points) {
          const dist = Math.sqrt(Math.pow(x - p.x, 2) + Math.pow(y - p.y, 2));
          const d = Math.max(dist, 1);

          if (d > bufferZone) {
            score += 1 / Math.pow(d, decayOutside);
          } else {
            const numerator = Math.pow(bufferZone, decayInside - decayOutside);
            const denominator = Math.pow(2 * bufferZone - d, decayInside);
            score += numerator / denominator;
          }
        }

        gridScores.push({ x, y, score });

        if (score > maxScore) {
          maxScore = score;
          bestX = x;
          bestY = y;
        }
      }
    }

    let hotzoneCells = 0;

    gridScores.forEach((cell) => {
      const normalized = cell.score / maxScore;

      if (normalized >= 0.5) {
        hotzoneCells++;
      }

      if (normalized > 0.1) {
        const alpha = normalized * 0.85;
        const r = Math.floor(129 + 126 * normalized);
        const g = Math.floor(140 - 25 * normalized);
        const b = Math.floor(248 - 226 * normalized);

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fillRect(cell.x, cell.y, GRID_SIZE, GRID_SIZE);
      }
    });

    const searchAreaRatio = hotzoneCells / gridScores.length;
    const baseConfidence = Math.max(0, 100 - searchAreaRatio * 500);
    const samplePenalty = Math.min(1, points.length / 5);
    const calculatedConfidence = Math.floor(baseConfidence * samplePenalty);

    setAnchor({ x: bestX, y: bestY, score: maxScore });
    setConfidence(calculatedConfidence);
  }, [points, bufferZone, decayOutside, decayInside]);

  useEffect(() => {
    calculateRossmo();
  }, [calculateRossmo]);

  return (
    <div className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden flex flex-col-reverse md:flex-row shadow-2xl">
      {/* LEFT PANEL: CONTROLS (Bottom on mobile) */}
      <div className="w-full md:w-1/3 p-4 md:p-6 border-t md:border-t-0 md:border-r border-white/10 bg-white/5 flex flex-col justify-between">
        <div>
          <h3 className="font-mono text-[10px] text-indigo-400 tracking-widest uppercase mb-2">
            ROSSMO_GP_MODEL
          </h3>
          <p className="text-[9px] text-white/50 leading-relaxed mb-6 font-mono">
            Grid-based profiling utilising Dr. Kim Rossmo&apos;s complete
            formula. Click to add incident points. Confidence is calculated via
            inverse spatial variance (Hit Score Area).
          </p>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-end mb-1.5">
                <label className="font-mono text-[9px] text-white/40 tracking-widest">
                  BUFFER_ZONE (B)
                </label>
                <span className="font-mono text-[10px] text-white">
                  {bufferZone}m
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                value={bufferZone}
                onChange={(e) => setBufferZone(parseInt(e.target.value))}
                className="w-full accent-indigo-400 h-1 bg-white/10 rounded-full appearance-none cursor-pointer outline-none hover:bg-white/20 transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between items-end mb-1.5">
                <label className="font-mono text-[9px] text-white/40 tracking-widest">
                  DECAY_OUTSIDE (f)
                </label>
                <span className="font-mono text-[10px] text-white">
                  {decayOutside.toFixed(1)}
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="4.0"
                step="0.1"
                value={decayOutside}
                onChange={(e) => setDecayOutside(parseFloat(e.target.value))}
                className="w-full accent-orange-400 h-1 bg-white/10 rounded-full appearance-none cursor-pointer outline-none hover:bg-white/20 transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between items-end mb-1.5">
                <label className="font-mono text-[9px] text-white/40 tracking-widest">
                  DECAY_INSIDE (g)
                </label>
                <span className="font-mono text-[10px] text-white">
                  {decayInside.toFixed(1)}
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="4.0"
                step="0.1"
                value={decayInside}
                onChange={(e) => setDecayInside(parseFloat(e.target.value))}
                className="w-full accent-red-400 h-1 bg-white/10 rounded-full appearance-none cursor-pointer outline-none hover:bg-white/20 transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10">
              <div>
                <p className="font-mono text-[9px] text-white/40 tracking-widest mb-1">
                  OBSERVATIONS
                </p>
                <p className="font-mono text-xs text-white">{points.length}</p>
              </div>
              <div>
                <p className="font-mono text-[9px] text-white/40 tracking-widest mb-1">
                  SPATIAL_CERTAINTY
                </p>
                <p
                  className={`font-mono text-xs ${confidence < 40 ? "text-red-400" : confidence < 75 ? "text-yellow-400" : "text-green-400"}`}
                >
                  {points.length === 0 ? "0%" : `${confidence}%`}
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={clearData}
          disabled={points.length === 0}
          className="mt-6 w-full py-2 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 transition-colors font-mono text-[9px] tracking-[0.2em] uppercase text-white/40 hover:text-red-400 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer md:cursor-none"
        >
          PURGE_TELEMETRY
        </button>
      </div>

      {/* RIGHT PANEL: INTERACTIVE MAP (Top on mobile) */}
      <div
        ref={containerRef}
        onClick={handleMapClick}
        className="w-full md:w-2/3 aspect-[4/3] md:aspect-auto md:h-[450px] relative bg-[#050214] overflow-hidden cursor-crosshair touch-none"
      >
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-none"
        />

        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {points.map((p) => (
            <motion.circle
              key={`dot-${p.id}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="#fff"
              className="drop-shadow-[0_0_2px_#fff]"
            />
          ))}

          {anchor !== null && points.length > 0 && (
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              cx={anchor.x}
              cy={anchor.y}
              className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300"
            >
              <circle
                cx={anchor.x + GRID_SIZE / 2}
                cy={anchor.y + GRID_SIZE / 2}
                r="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                className="animate-spin-slow"
              />
              <circle
                cx={anchor.x + GRID_SIZE / 2}
                cy={anchor.y + GRID_SIZE / 2}
                r="3"
                fill="currentColor"
              />
              <text
                x={anchor.x + 20}
                y={anchor.y + 4}
                className="text-[10px] font-mono fill-red-400 tracking-widest drop-shadow-md"
              >
                ANCHOR_POINT
              </text>
            </motion.g>
          )}
        </svg>

        {points.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="font-mono text-[10px] tracking-widest text-white/20 uppercase border border-white/10 px-4 py-2 rounded-sm bg-black/20 backdrop-blur-sm">
              Awaiting telemetry input...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
