import React, { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function Main({ children }) {
  return (
    <main className="main">
      {children}
      {/* <ListBox />
      <WatchedBox /> */}
    </main>
  );
}
export default Main;
