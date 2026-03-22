export default function Home() {
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

            <div className="rounded-full border border-red-500 px-4 py-2 text-sm font-bold text-red-400">
              OFFLINE
            </div>
          </div>
        </section>

        <section className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-[24px] border border-[#243b63] bg-[#0b1730] p-5">
            <div className="mb-5 text-sm text-cyan-400">CORE CASH 💖</div>
            <div className="text-center text-7xl font-bold leading-none">0</div>
          </div>

          <div className="rounded-[24px] border border-[#243b63] bg-[#0b1730] p-5">
            <div className="mb-5 text-sm text-cyan-400">NODES 💖</div>
            <div className="text-center text-7xl font-bold leading-none">0</div>
          </div>
        </section>

        <section className="mt-4 rounded-[28px] border border-[#243b63] bg-[#0b1730] p-4">
          <button className="w-full rounded-[32px] bg-slate-100 px-6 py-8 text-5xl font-extrabold tracking-wide text-black shadow-[inset_0_-10px_0_rgba(100,116,139,0.45)]">
            ⚡ BURST
          </button>
        </section>

        <section className="mt-4 rounded-[28px] border border-[#243b63] bg-[#0b1730] p-4">
          <button className="w-full rounded-[28px] border border-[#36527e] bg-transparent px-6 py-6 text-3xl tracking-[0.35em] text-white">
            SINGLE PULSE
          </button>
        </section>

        <section className="mt-4 grid grid-cols-2 gap-4">
          <button className="rounded-[24px] border border-[#36527e] bg-[#081630] px-4 py-5 text-sm">
            STOP BURST
          </button>
          <button className="rounded-[24px] border border-[#36527e] bg-[#081630] px-4 py-5 text-sm">
            FORCE RESET ALL
          </button>
        </section>

        <section className="mt-4 rounded-[28px] border border-[#243b63] bg-[#0b1730] p-5">
          <div className="mb-3 text-sm text-cyan-400">GATEWAY (GENESIS CORE)</div>
          <div className="rounded-[18px] border border-[#36527e] bg-black px-4 py-4 text-cyan-400">
            https://torus-production.vercel.app
          </div>
        </section>

        <section className="mt-4 rounded-[28px] border border-[#243b63] bg-[#0b1730] p-5">
          <div className="mb-4 text-sm text-cyan-400">SIGNAL MONITOR</div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[18px] border border-[#36527e] bg-[#00082c] p-4">
              <div className="mb-2 text-xs text-slate-300">SEND</div>
              <div className="text-2xl font-bold">IDLE</div>
            </div>

            <div className="rounded-[18px] border border-[#36527e] bg-[#00082c] p-4">
              <div className="mb-2 text-xs text-slate-300">RECEIVE</div>
              <div className="text-2xl font-bold">IDLE</div>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-[28px] border border-[#243b63] bg-[#0b1730] p-5">
          <div className="mb-4 text-sm text-cyan-400">TELEMETRY</div>
          <div className="min-h-[140px] rounded-[18px] border border-[#36527e] bg-[#050d21] p-4 font-mono text-sm text-slate-200">
            [TORUS] UI boot successful
            <br />
            [TORUS] awaiting signal...
          </div>
        </section>
      </div>
    </main>
  );
}