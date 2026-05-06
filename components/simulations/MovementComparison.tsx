"use client";

import { useState, useEffect, useRef } from "react";

type Point = { x: number; y: number };

const VIEW_BOX_W = 800;
const VIEW_BOX_H = 450;
const MAX_STEPS = 800;

const ALLOWED_ANGLES = [0, 30, 60, 90, 135, 180];

const ECOLOGICAL_STATES = [
  "Linear Migration (Extreme Persistence)",
  "Directed Transit (Low Variance)",
  "Standard Foraging (Avian Search)",
  "Broad Area Search (Medium Variance)",
  "Intense Patch Search (ARS)",
  "Chaotic Walk (Zero Memory)",
];

export default function MovementComparison() {
  const [isPlaying, setIsPlaying] = useState(false);

  const [angleIndex, setAngleIndex] = useState(2); // Defaults to index 2 (60 degrees)

  const maxTurnAngle = ALLOWED_ANGLES[angleIndex];
  const currentStateLabel = ECOLOGICAL_STATES[angleIndex];

  const brownianPath = useRef<Point[]>([
    { x: VIEW_BOX_W / 2, y: VIEW_BOX_H / 2 },
  ]);
  const crwPath = useRef<Point[]>([{ x: VIEW_BOX_W / 2, y: VIEW_BOX_H / 2 }]);

  const angles = useRef({
    brownian: Math.random() * 2 * Math.PI,
    crw: Math.random() * 2 * Math.PI,
  });

  const [, setRenderTrigger] = useState(0);

  const resetSimulation = () => {
    const center = { x: VIEW_BOX_W / 2, y: VIEW_BOX_H / 2 };
    brownianPath.current = [{ ...center }];
    crwPath.current = [{ ...center }];
    angles.current = {
      brownian: Math.random() * 2 * Math.PI,
      crw: Math.random() * 2 * Math.PI,
    };
    setRenderTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isPlaying) return;

    let animationFrameId: number;

    const simulateStep = () => {
      const SIM_SPEED = 3;
      const STEP_LENGTH = 4;

      for (let i = 0; i < SIM_SPEED; i++) {
        // ==========================================
        // 1. PURE BROWNIAN WALK
        // ==========================================
        const bLast = brownianPath.current[brownianPath.current.length - 1];
        angles.current.brownian = Math.random() * 2 * Math.PI;

        let bx = bLast.x + Math.cos(angles.current.brownian) * STEP_LENGTH;
        let by = bLast.y + Math.sin(angles.current.brownian) * STEP_LENGTH;

        if (bx < 0 || bx > VIEW_BOX_W) bx = bLast.x;
        if (by < 0 || by > VIEW_BOX_H) by = bLast.y;

        brownianPath.current.push({ x: bx, y: by });
        if (brownianPath.current.length > MAX_STEPS)
          brownianPath.current.shift();

        // ==========================================
        // 2. CORRELATED RANDOM WALK (CRW)
        // ==========================================
        const cLast = crwPath.current[crwPath.current.length - 1];

        const turnVarianceRad = (maxTurnAngle * Math.PI) / 180;

        angles.current.crw += (Math.random() - 0.5) * 2 * turnVarianceRad;

        let cx = cLast.x + Math.cos(angles.current.crw) * STEP_LENGTH;
        let cy = cLast.y + Math.sin(angles.current.crw) * STEP_LENGTH;

        if (cx < 0 || cx > VIEW_BOX_W) {
          angles.current.crw = Math.PI - angles.current.crw;
          cx = Math.max(0, Math.min(cx, VIEW_BOX_W));
        }
        if (cy < 0 || cy > VIEW_BOX_H) {
          angles.current.crw = -angles.current.crw;
          cy = Math.max(0, Math.min(cy, VIEW_BOX_H));
        }

        crwPath.current.push({ x: cx, y: cy });
        if (crwPath.current.length > MAX_STEPS) crwPath.current.shift();
      }

      setRenderTrigger((prev) => prev + 1);
      animationFrameId = requestAnimationFrame(simulateStep);
    };

    animationFrameId = requestAnimationFrame(simulateStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, maxTurnAngle]);

  const getPolyline = (path: Point[]) =>
    path.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden flex flex-col shadow-2xl">
      {/* HEADER BAR */}
      <div className="flex items-center justify-between p-3 border-b border-white/10 bg-white/5">
        <div>
          <h3 className="font-mono text-[10px] text-orange-400 tracking-widest uppercase mb-0.5">
            Animal Movement Simulator
          </h3>
          <p className="font-mono text-[10px] text-white/80 tracking-tight">
            Pure Brownian vs. Correlated Random Walk
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={resetSimulation}
            className="font-mono text-[9px] text-white/40 hover:text-white transition-colors tracking-widest uppercase cursor-none"
          >
            [ Reset ]
          </button>
        </div>
      </div>

      {/* SIMULATION AREA */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 relative">
        {/* BROWNIAN PANEL */}
        <div className="p-3 md:p-5 bg-[#050214] flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="font-mono text-[9px] text-indigo-400 tracking-widest uppercase">
                Pure Brownian
              </h4>
              <p className="text-[9px] text-white/40 font-mono mt-0.5">
                Random direction at every step.
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-video border border-white/5 rounded-sm overflow-hidden bg-black/50">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:25px_25px]" />
            <svg
              viewBox={`0 0 ${VIEW_BOX_W} ${VIEW_BOX_H}`}
              className="w-full h-full drop-shadow-[0_0_5px_rgba(129,140,248,0.8)]"
            >
              <polyline
                points={getPolyline(brownianPath.current)}
                fill="none"
                stroke="rgba(129, 140, 248, 0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx={brownianPath.current[brownianPath.current.length - 1].x}
                cy={brownianPath.current[brownianPath.current.length - 1].y}
                r="3"
                fill="#818cf8"
              />
            </svg>
          </div>
        </div>

        {/* CRW PANEL */}
        <div className="p-3 md:p-5 bg-[#050214] flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="font-mono text-[9px] text-orange-400 tracking-widest uppercase">
                Correlated Random Walk
              </h4>
              <p className="text-[9px] text-white/40 font-mono mt-0.5">
                State: {currentStateLabel}
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-video border border-white/5 rounded-sm overflow-hidden bg-black/50">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:25px_25px]" />
            <svg
              viewBox={`0 0 ${VIEW_BOX_W} ${VIEW_BOX_H}`}
              className="w-full h-full drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]"
            >
              <polyline
                points={getPolyline(crwPath.current)}
                fill="none"
                stroke="rgba(249, 115, 22, 0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx={crwPath.current[crwPath.current.length - 1].x}
                cy={crwPath.current[crwPath.current.length - 1].y}
                r="3"
                fill="#f97316"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* CONTROLS PANEL */}
      <div className="p-4 bg-white/5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-full md:w-1/2">
          <div className="flex justify-between items-end mb-2">
            <label className="font-mono text-[9px] text-white/40 tracking-widest uppercase">
              Directional_Persistence
            </label>
            <span className="font-mono text-[10px] text-white">
              ±{maxTurnAngle}°
            </span>
          </div>
          <input
            type="range"
            min="0"
            max={ALLOWED_ANGLES.length - 1}
            step="1"
            value={angleIndex}
            onChange={(e) => setAngleIndex(parseInt(e.target.value))}
            className="w-full accent-orange-400 h-1 bg-white/10 rounded-full appearance-none cursor-none outline-none hover:bg-white/20 transition-colors"
          />
          <div className="flex justify-between mt-1.5 px-1">
            {ALLOWED_ANGLES.map((angle, idx) => (
              <span
                key={idx}
                className={`text-[8px] font-mono uppercase transition-colors ${idx === angleIndex ? "text-orange-400" : "text-white/30"}`}
              >
                {angle}°
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-full md:w-1/3 py-2 border border-orange-500/30 hover:border-orange-500/80 hover:bg-orange-500/10 transition-colors font-mono text-[9px] tracking-[0.2em] uppercase text-orange-400 cursor-none flex items-center justify-center gap-2 shrink-0"
        >
          {isPlaying ? (
            <>
              <span className="w-1.5 h-1.5 bg-orange-400" /> PAUSE_FEED
            </>
          ) : (
            <>
              <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-orange-400 border-b-[3px] border-b-transparent" />{" "}
              INITIATE
            </>
          )}
        </button>
      </div>
    </div>
  );
}
