import { memo, useCallback, useState } from "react";
import "./lab7.css";

const Child = memo(function Child({ onClick }: { onClick: () => void }) {
  console.log("%cChild render", "color: orange; font-weight: bold;");

  return (
    <div className="box">
      <p>Child (memo)</p>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
});

export default function Lab7() {
  const [count, setCount] = useState(0);

  console.log("%cParent render", "color: deepskyblue; font-weight: bold;");

  // ✅ 함수 "주소"를 고정 (의존성 배열이 []라서 처음 만든 걸 계속 재사용)
  const handleChildClick = useCallback(() => {
    alert("child click!");
  }, []);

  return (
    <div className="page">
      <h2>Lab7 - useCallback 적용</h2>

      <div className="box">
        <p>Parent count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Parent +1</button>
      </div>

      <Child onClick={handleChildClick} />
    </div>
  );
}
