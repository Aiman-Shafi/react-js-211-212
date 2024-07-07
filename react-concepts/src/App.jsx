// import { useEffect } from "react";
// import { useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import "./App.css";
// import FormComponent from "./FormComponent";

function App() {
  // const [count, setCount] = useState({
  //   num: 10,
  //   id: "xyz",
  //   age: 30,
  // });

  // const handleAdd = () => {
  //   // setCount(count + 1); // 8 + 1 => 9
  //   // console.log(count); // 8
  //   // setCount(count + 4);
  //   // setCount(count + 2); // 8 + 2 = 10
  //   // setCount((prevvalue) => prevvalue + 1);
  // };

  // const changeNum = () => {
  //   setCount({
  //     num: 20,
  //   });
  // };

  const { data, loading, error } = useFetchApi(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <div>loading..</div>;
  if (error) return <div>Something went wrong!</div>;

  return (
    <>
      <div>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
    </>
  );
}

export default App;
