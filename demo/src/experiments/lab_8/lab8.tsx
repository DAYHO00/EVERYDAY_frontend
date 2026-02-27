import { useMemo, useRef, useState } from "react";
import "./lab8.css";

type Mode = "layout" | "paint" | "composite";

export default function Lab8() {
  const [mode, setMode] = useState<Mode>("layout");
  const [tick, setTick] = useState(0);

  // 현재 모드에 따라 className만 바뀌게 만들기
  const boxClass = useMemo(() => {
    if (mode === "layout") return "box layout";
    if (mode === "paint") return "box paint";
    return "box composite";
  }, [mode]);

  // 버튼 클릭 시 “변화가 계속 발생”하도록 tick 증가
  const onRun = () => setTick((v) => v + 1);

  // tick을 실제 스타일 변경 트리거로 사용(아래 style에서 활용)
  const dynamicStyle = useMemo(() => {
    if (mode === "layout") {
      // 레이아웃을 건드리는 속성
      return { width: 200 + (tick % 2) * 120 };
    }
    if (mode === "paint") {
      // 페인트만 바뀌는 속성 (대부분 layout은 그대로)
      return {
        backgroundColor: tick % 2 === 0 ? "" : "rgba(255, 140, 0, 0.35)",
      };
    }
    // 컴포지팅 단계에서 처리되기 쉬운 속성
    return { transform: `translateX(${(tick % 2) * 140}px)` };
  }, [mode, tick]);

  return (
    <div className="lab8">
      <h2>Lab 8 — Browser Rendering Pipeline</h2>

      <div className="controls">
        <button
          className={mode === "layout" ? "active" : ""}
          onClick={() => setMode("layout")}
        >
          Layout (width)
        </button>
        <button
          className={mode === "paint" ? "active" : ""}
          onClick={() => setMode("paint")}
        >
          Paint (bg-color)
        </button>
        <button
          className={mode === "composite" ? "active" : ""}
          onClick={() => setMode("composite")}
        >
          Composite (transform)
        </button>

        <button className="run" onClick={onRun}>
          Run change
        </button>
      </div>

      <div className="stage">
        <div className="label">
          Mode: {mode} / tick: {tick}
        </div>

        <div className="row">
          <div className={boxClass} style={dynamicStyle}>
            BOX
          </div>

          <div className="info">
            <p>
              <b>목표</b>: 버튼을 바꾸고 <b>Run change</b>를 눌러서 “어떤 단계가
              일어나는지” DevTools로 확인합니다.
            </p>
            <ul>
              <li>Layout: width 변경 → reflow 가능성↑</li>
              <li>Paint: bg-color 변경 → repaint 가능성↑</li>
              <li>Composite: transform 변경 → 합성 단계 위주</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
