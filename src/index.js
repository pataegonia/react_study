import React from "react";
import ReactDOM from "react-dom/client";
import Todo_list from "./Todo";
import Coin_Tracker from "./Coin";

const root = ReactDOM.createRoot(document.getElementById("root"));
function APP() {
  //return <Todo_list />;
  return <Coin_Tracker />;
}
root.render(<APP />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
