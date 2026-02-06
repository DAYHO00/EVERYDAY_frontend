import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const logAfter3s = () => {
    setTimeout(() => {
      console.log("Count value after 3 seconds:", count);
      alert(`Count value after 3 seconds: ${count}`);
    }, 3000);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Closure 실습</h2>

      <p>현재 count: {count}</p>

      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
        <button onClick={increase}>+1</button>
        <button onClick={logAfter3s}>3초 뒤 count 출력</button>
      </div>

      <p style={{ marginTop: "1rem", color: "#666" }}>
        실험: <b>“3초 뒤 count 출력”</b> 누른 다음, 3초 안에 <b>+1</b>을 여러 번
        눌러보세요.
        <br />
        3초 뒤 출력되는 값이 “내가 기대한 값”과 같은지 확인!
      </p>
    </div>
  );
}

export default App;
