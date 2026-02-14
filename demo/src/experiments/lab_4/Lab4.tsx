import { useRef, useState } from "react";
import "./Lab4.css";

export default function Lab4() {
  const [status, setStatus] = useState("idle");
  const stopRef = useRef(false);

  const startStarvation = () => {
    stopRef.current = false;
    setStatus("running (microtask loop)");

    let count = 0;
    console.log("START microtask loop");

    const loop = () => {
      if (stopRef.current) {
        console.log("STOP microtask loop, final count =", count);
        setStatus("stopped");
        return;
      }

      count++;

      // 콘솔 스팸 방지: 가끔만 출력
      if (count % 5000 === 0) {
        console.log("micro count =", count);
      }

      // 마이크로태스크로 다시 예약 (microtask queue를 계속 채움)
      Promise.resolve().then(loop);
    };

    // 비교용 매크로태스크: 원래라면 금방 찍혀야 하는데,
    // microtask가 너무 많으면 늦게 찍히거나 거의 안 찍힘
    setTimeout(() => {
      console.log("macrotask fired (setTimeout)");
    }, 0);

    loop();
  };

  const stop = () => {
    stopRef.current = true;
    setStatus("stopping...");
  };

  const startMacroLoop = () => {
    stopRef.current = false;
    setStatus("running (macrotask loop)");

    let count = 0;
    console.log("START macrotask loop");

    const loop = () => {
      if (stopRef.current) {
        console.log("STOP macrotask loop, final count =", count);
        setStatus("stopped");
        return;
      }

      count++;
      if (count % 200 === 0) {
        console.log("macro count =", count);
      }

      // 매크로태스크로 다시 예약 (렌더링 기회가 생김)
      setTimeout(loop, 0);
    };

    setTimeout(() => {
      console.log("macrotask fired (setTimeout) - should appear normally");
    }, 0);

    loop();
  };

  return (
    <div className="lab4">
      <h2>Lab 04 - Event Loop (Step 3)</h2>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button onClick={startStarvation}>Start Microtask Loop</button>
        <button onClick={startMacroLoop}>Start Macro Loop</button>
        <button onClick={stop}>Stop</button>
      </div>

      <div>
        <b>Status:</b> {status}
      </div>

      <p>
        Console을 보면서,
        <br />- Microtask loop에서 <code>setTimeout</code> 로그가 늦게 찍히는지
        <br />- Macro loop에서는 정상적으로 찍히는지 비교하세요.
      </p>
    </div>
  );
}
