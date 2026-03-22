"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [coreCash, setCoreCash] = useState(0);
  const [nodesCount, setNodesCount] = useState(0);
  const [status, setStatus] = useState<"OFFLINE" | "ONLINE" | "STOPPED">("OFFLINE");
  const [sendSignal, setSendSignal] = useState("IDLE");
  const [receiveSignal, setReceiveSignal] = useState("IDLE");
  const [telemetry, setTelemetry] = useState<string[]>([
    "[TORUS] UI boot successful",
    "[TORUS] awaiting signal...",
  ]);

  const burstTimerRef = useRef<NodeJS.Timeout | null>(null);

  const addLog = (message: string) => {
    const time = new Date().toLocaleTimeString("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setTelemetry((prev) => [`[${time}] ${message}`, ...prev].slice(0, 12));
  };

  const applyOnlineSignals = () => {
    setStatus("ONLINE");
    setSendSignal("SEND");
    setReceiveSignal("RECEIVE");
  };

  const singlePulse = () => {
    setCoreCash((prev) => prev + 1);
    setNodesCount((prev) => prev + 1);
    applyOnlineSignals();
    addLog("single pulse accepted");
  };

  const startBurst = () => {
    if (burstTimerRef.current) return;

    setStatus("ONLINE");
    setSendSignal("SEND");
    setReceiveSignal("RECEIVE");
    addLog("burst started");

    burstTimerRef.current = setInterval(() => {
      setCoreCash((prev) => prev + 1);
      setNodesCount((prev) => prev + 1);
    }, 400);
  };

  const stopBurst = () => {
    if (burstTimerRef.current) {
      clearInterval(burstTimerRef.current);
      burstTimerRef.current = null;
    }

    setStatus("STOPPED");
    setSendSignal("STOPPED");
    setReceiveSignal("STOPPED");
    addLog("burst stopped");
  };

  const resetAll = () => {
    if (burstTimerRef.current) {
      clearInterval(burstTimerRef.current);
      burstTimerRef.current = null;
    }

    setCoreCash(0);
    setNodesCount(0);
    setStatus("OFFLINE");
    setSendSignal("IDLE");
    setReceiveSignal("IDLE");
    addLog("all counters reset");
  };

  useEffect(() => {
    return () => {
      if (burstTimerRef.current) {
        clearInterval(burstTimerRef.current);
      }
    };
  }, []);

  const statusClass =
    status === "ONLINE"
      ? "border-green-500 text-green-400"
      : status === "STOPPED"
        ? "border-yellow-500 text-yellow-400"
        : "border-red-500 text-red-400";

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <div className="mx-auto w-full max-w-md px-4 py-4">
        <section className="rounded-[28px] border border-[#243b63] bg-[#0b1730] p-5 shadow-2xl">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18294a] text-3xl font-bold">
                T
              </div>
              <div>
                <div className="text-[11px] tracking-[0.3em] text-slate-300">
                  SATELLITE UI
                </div>
                <h1 className="text-3xl font-bold leading-none">
                  TORUS V18.0 REBIRTH
                </h1>
              </div>
            </div>

            <div className={`rounded-full border px-4 py-2 text-sm font-bold ${statusClass}`}>
              {status}
            </div>
          </div>
        </section>

        <section className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-[24px] border border-[#243b63] bg-[#0b1730] p-5">
            <div className="mb-5 text-sm text-cyan-400">CORE CASH 💖</div>
            <div className="text-center text-7xl font-bold leading-none">{coreCash}</div>
          </div>

          <div className="rounded-[24px] border border-[#243b63] bg-[#0b1730] p-5">
            <div className="mb-5 text-sm text-cyan-400">NODES 💖</div>
            <div className="text-center text-7xl font-bold leading-none">{nodesCount}</div>
          </div>
        </section>

        <section className="mt-4 rounded-[28px] border border-[#243b63] bg-[#0b1730] p-4">
          <button
            onClick={startBurst}
            className="w-full rounded-[32px] bg-slate-100 px-6 py-8 text-5xl font-extrabold tracking-wide text-black shadow-[inset_0_-10px_0_rgba(100,116,139,0.45)] active:translate-y-[2px]"
          >
            ⚡ BURST
          </button>
        </section>

        <section className="mt-4 rounded-[28px] border border-[#243b63] bg-[#0b1730] p-4">
          <button
            onClick={singlePulse}
            className="w-full rounded-[28px] border border-[#36527e] bg-transparent px-6 py-6 text-3xl tracking-[0.35em] text-white active:bg-[#102040]"
          >
            SINGLE PULSE
          </button>
        </section>

        <section className="mt-4 grid grid-cols-2 gap-4">
          <button
            onClick={stopBurst}
            className="rounded-[24px] border border-[#36527e] bg-[#081630] px-4 py-5 text-sm active:bg-[#102040]"
          >
            STOP BURST
          </button>
          <button
            onClick={resetAll}
            className="rounded-[24px] border border-[#36527e] bg-[#081630] px-4 py-5 text-sm active:bg-[#102040]"
          >
            FORCE RESET ALL
          </button>
        </section>

        <section className="mt-4 rounded-[28px] border border-[#243b63] bg-[#0b1730] p-5">
          <div className="mb-3 text-sm text-cyan-400">GATEWAY (GENESIS CORE)</div>
          <div className="rounded-[18px] border border-[#36527e] bg-black px-4 py-4 text-cyan-400 break-all">
            {typeof window !== "undefined" ? window.location.origin : "https://torus-production.vercel.app"}
          </div>
        </section>

        <section className="mt-4 rounded-[28px] border border-[#243b63] bg-[#0b1730] p-5">
          <div className="mb-4 text-sm text-cyan-400">SIGNAL MONITOR</div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[18px] border border-[#36527e] bg-[#00082c] p-4">
              <div className="mb-2 text-xs text-slate-300">SEND</div>
              <div className="text-2xl font-bold">{sendSignal}</div>
            </div>

            <div className="rounded-[18px] border border-[#36527e] bg-[#00082c] p-4">
              <div className="mb-2 text-xs text-slate-300">RECEIVE</div>
              <div className="text-2xl font-bold">{receiveSignal}</div>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-[28px] border border-[#243b63] bg-[#0b1730] p-5">
          <div className="mb-4 text-sm text-cyan-400">TELEMETRY</div>
          <div className="min-h-[140px] rounded-[18px] border border-[#36527e] bg-[#050d21] p-4 font-mono text-sm text-slate-200">
            {telemetry.map((line, index) => (
              <div key={`${line}-${index}`}>{line}</div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}