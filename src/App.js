import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time ");
  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  };
  useEffect(iRunOnlyOnce, []); // [] 빈 공백 : 딱 한번만 실행시켜 줌
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); //keyword가 변화할 때마다 실행시켜줌
  useEffect(() => {
    console.log("i run only 'counter' changes.");
  }, [counter]); //counter가 변화할 때마다 실행시켜줌
  useEffect(() => {
    console.log("i run when keyword & counter chang");
  }, [keyword, counter]); //keyword 랑 counter 두 개도 적용 동시에 적용가능

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
