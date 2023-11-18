import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Table from "./Component/Table";
import Search from "./Component/Search";
import TogelButton from "./Component/TogelButton";
const App = () => {
  return (
    <div className="mai_container">
      <Navbar />
      <Search />
      <Table />
      <TogelButton />
    </div>
  );
};

export default App;
