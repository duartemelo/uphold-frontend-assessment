import React from "react";
import "./App.css";
import logo from "./assets/images/logo.svg";
import Button from "./components/atom/Button";

// TODO: Header buttons to ul with li ?
// TODO: separate by components (converter, etc.)

function App() {
  return (
    <div>
      <header className="flex justify-between items-center p-14">
        <div className="flex gap-8 w-[300px]">
          <Button theme="text">Personal</Button>
          <Button theme="text">Business</Button>
          <Button theme="text">Partners</Button>
        </div>
        <div>
          <img src={logo} alt="Uphold Logo" />
        </div>
        <div className="w-[300px]">
          <Button className="float-right">Log in</Button>
        </div>
      </header>
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Currency Converter
        </h1>
        <h3 className="text-xl text-gray-400 text-center max-w-md mx-auto mt-4">
          Receive competitive and transparent pricing with no hidden spreads.
          See how we compare.
        </h3>
      </div>
    </div>
  );
}

export default App;
