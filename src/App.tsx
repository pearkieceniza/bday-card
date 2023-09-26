import { useState } from "react";
import data from "./data";
import List from "./List";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(data.length);

  const clearAll = () => setCount(0);

  return (
    <div className="container my-5 w-50 border py-4 px-5 bg-light shadow rounded-3">
      <h2>{count} Birthdays Today</h2>
      <hr />
      {Boolean(count) &&
        data.map((item) => {
          return <List key={item.id} {...item} />;
        })}
      <button className="btn w-100 fw-bold btn-danger" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
}
