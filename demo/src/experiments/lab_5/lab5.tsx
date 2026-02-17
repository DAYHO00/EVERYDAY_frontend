import { useState } from "react";
import "./lab5.css";

type ChildProps = {
  name: string;
  onChangeName: (next: string) => void;
};

function Child({ name, onChangeName }: ChildProps) {
  const [draft, setDraft] = useState(name);
  return (
    <div className="box">
      <h3> Child </h3>
      <div> props.name : {name} </div>
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="새 이름 입력"
        />
        <button onClick={() => onChangeName(draft)}>
          {" "}
          자식에서 변경 요청{" "}
        </button>
      </div>
      <p>
        자식은 props를 직접 변경하지 않고, 부모가 내려준 함수(onChangeName)를
        호출해서 부모 state를 바꿉니다.
      </p>
    </div>
  );
}

export default function lab5() {
  const [name, setName] = useState("Daeho");
  const handleChangeName = (next: string) => {
    setName(next);
  };

  return (
    <div className="container">
      <h2>Lab 5 props vs state</h2>
      <div className="box">
        <h3>Parent</h3>
        <div>state.name : {name} </div>
        <button
          onClick={() => setName("Daeho " + Math.floor(Math.random() * 100))}
          style={{ marginTop: "0.75rem" }}
        >
          부모 state 변경
        </button>
      </div>
      <Child name={name} onChangeName={handleChangeName} />
    </div>
  );
}
