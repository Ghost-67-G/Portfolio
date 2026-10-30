"use client";

import { useEffect, useState } from "react";

function CopyButton({ value, label = "Copy" }) {
  const [state, setState] = useState("idle");

  useEffect(() => {
    if (state === "idle") return;
    const id = setTimeout(() => setState("idle"), 1600);
    return () => clearTimeout(id);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
  };

  return (
    <button type="button" onClick={copy} className="btn btn-secondary h-8 px-3 text-[13px]">
      <span aria-live="polite">
        {state === "copied" ? "Copied" : state === "failed" ? "Press Ctrl+C" : label}
      </span>
    </button>
  );
}

export default CopyButton;
