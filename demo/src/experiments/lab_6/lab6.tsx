import { useRef, useState } from "react";
import "./lab6.css";

export default function Lab6() {
  console.log("Lab6 렌더링됨");

  const [controlledName, setcontrolledName] = useState("");

  const uncontrolledRef = useRef<HTMLInputElement | null>(null);

  const handleControlledSubmit = () => {
    alert(`[controlled] name = ${controlledName}`);
  };

  const handleUnControlSubmit = () => {
    const value = uncontrolledRef.current?.value ?? "";
    alert(`[uncontrolled] name = ${value}`);
  };

  return (
    <div className="lab6">
      <h2>Lab 06 - Controlled vs Uncontrolled </h2>
      <section className="box">
        <h3> 1) Controlled Component </h3>
        <input
          value={controlledName}
          onChange={(e) => setcontrolledName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        <button onClick={handleControlledSubmit}>제출</button>
        <p className="hint">state: {controlledName}</p>
      </section>
      <section className="box">
        <h3>2) Uncontrolled Component </h3>
        <input ref={uncontrolledRef} placeholder="이름을 입력하세요" />
        <button onClick={handleUnControlSubmit}>제출</button>
        <p className="hint">ref로 제출시점에만 읽음</p>
      </section>
    </div>
  );
}
