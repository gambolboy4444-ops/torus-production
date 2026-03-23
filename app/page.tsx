"use client";

import { useEffect, useState } from "react";

type TorusState = {
  id?: number;
  core_cash: number;
  nodes_count: number;
  status: string;
  updated_at?: string;
};

export default function Home() {
  const [state, setState] = useState<TorusState | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchState = async () => {
    const res = await fetch("/api/status", { cache: "no-store" });
    const data = await res.json();
    setState(data);
  };

  const callApi = async (url: string) => {
    setLoading(true);
    await fetch(url, { method: "POST" });
    await fetchState();
    setLoading(false);
  };

  useEffect(() => {
    fetchState();
  }, []);

  if (!state) return <div style={{ padding: 40 }}>Loading...</div>;

  return (
    <div style={{ padding: 40 }}>
      <h1>TORUS CORE</h1>
      <p>cash: {state.core_cash}</p>
      <p>nodes: {state.nodes_count}</p>
      <p>status: {state.status}</p>

      <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
        <button onClick={() => callApi("/api/pulse")} disabled={loading}>
          PULSE
        </button>
        <button onClick={() => callApi("/api/reset")} disabled={loading}>
          RESET
        </button>
        <button onClick={() => callApi("/api/stop")} disabled={loading}>
          STOP
        </button>
      </div>
    </div>
  );
}