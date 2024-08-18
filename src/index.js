import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Todo_list from "./Todo";
import Coin_Tracker from "./Coin";
import Movie from "./movie";

const root = ReactDOM.createRoot(document.getElementById("root"));
function APP() {
  const [page, setPage] = useState("");
  const pageChange = (event) => {
    setPage(event.target.value);
  };
  return (
    <div>
      {page === "todo" ? <Todo_list /> : null}
      {page === "coin" ? <Coin_Tracker /> : null}
      {page === "movie" ? <Movie /> : null}
      {page === "" ? (
        <div>
          <h1>Choose your Page</h1>
          <select value={page} onChange={pageChange}>
            <option>select your page</option>
            <option>todo</option>
            <option>coin</option>
            <option>movie</option>
          </select>
        </div>
      ) : null}
    </div>
  );
}
root.render(<APP />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
