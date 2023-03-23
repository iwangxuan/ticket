/*
 * @Date: 2023-03-14 18:54:11
 * @LastEditTime: 2023-03-22 21:32:11
 */
import React from "react";
import App from './App'
import ReactDOM from "react-dom/client";
import MyRouter from "./route";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <MyRouter />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
