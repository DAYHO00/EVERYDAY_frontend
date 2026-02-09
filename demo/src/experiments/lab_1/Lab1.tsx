import { useRef } from "react";
import "./Lab1.css";

function Lab1() {
  const boxRef = useRef<HTMLDivElement>(null);
  const reflow = () => {
    const el = boxRef.current;
    if (!el) {
      return;
    }
    el.style.width = el.offsetWidth + 10 + "px";
  };

  const repaint = () => {
    const el = boxRef.current;
    if (!el) {
      return;
    }
    el.style.backgroundColor =
      el.style.backgroundColor === "red" ? "#4f7cff" : "red";
  };

  const composite = () => {
    const el = boxRef.current;
    if (!el) {
      return;
    }
    el.style.transform = "translate(40px)";
  };

  return (
    <div className="lab1">
      <h2> Lab1 -reflow - repaint -composites </h2>
      <div className="contorls">
        <button onClick={reflow}> Reflow</button>
        <button onClick={repaint}> Repaint</button>
        <button onClick={composite}> Composite</button>
      </div>

      <div className="stage">
        <div ref={boxRef} className="box">
          target
        </div>
      </div>
    </div>
  );
}
export default Lab1;
