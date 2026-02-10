import "./Lab2.css";

// 🔹 모듈(전역처럼 보이는) 스코프
const globalValue = "GLOBAL";

function outerFunction() {
  const outerValue = "OUTER";

  function innerFunction() {
    const innerValue = "INNER";

    console.log("innerValue:", innerValue); // 1️⃣ 자기 자신
    console.log("outerValue:", outerValue); // 2️⃣ 외부 스코프
    console.log("globalValue:", globalValue); // 3️⃣ 더 바깥 스코프
  }

  return innerFunction;
}

export default function Lab2() {
  console.log("[Component] Lab2 실행");

  const runScopeChainTest = () => {
    const fn = outerFunction();
    fn();
  };

  return (
    <div className="lab2">
      <h2>Lab 2 - Scope Chain</h2>
      <button onClick={runScopeChainTest}>스코프 체인 실험 실행</button>
    </div>
  );
}
