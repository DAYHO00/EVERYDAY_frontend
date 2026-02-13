import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function Lab3() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Lab3 - staleTime 실험</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "숨기기" : "보이기"}
      </button>

      {show && <TestComponent />}
    </div>
  );
}

const fetchData = async (): Promise<string> => {
  console.log("🔥 fetchData 실행됨");

  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("서버에서 받아온 데이터");
    }, 500);
  });
};

function TestComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ["lab3-data"],
    queryFn: fetchData,
    staleTime: 50000,
  });

  if (isLoading) return <div>Loading...</div>;

  return <div>{data}</div>;
}

export default Lab3;
