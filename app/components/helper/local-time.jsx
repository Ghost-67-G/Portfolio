"use client";

import { useEffect, useState } from "react";

// Renders the time only after mount so the server HTML and the first client
// render match; the UTC offset is static and fills the space until then.
function LocalTime({ timeZone }) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-US", { timeZone, hour: "numeric", minute: "2-digit" });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 20_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span className="tabular-nums">
      {time && <>{time} </>}
      <span className="text-ink-3">(UTC+5)</span>
    </span>
  );
}

export default LocalTime;
