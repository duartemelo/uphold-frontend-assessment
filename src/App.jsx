import React from "react";
import "./App.css";
import logo from "./assets/images/logo.svg";
import Button from "./components/atom/Button";
import RatesConverter from "./components/organism/RatesConverter";
import Separator from "./components/atom/Separator";
import Text from "./components/atom/Text";
import Footer from "./components/organism/Footer";

// TODO: separate by components (converter, etc.)

function App() {
  return (
    <div>
      <header className="flex justify-between items-center p-14">
        <ul className="flex gap-8 w-[300px]">
          <li>
            <Button theme="text">Personal</Button>
          </li>
          <li>
            <Button theme="text">Business</Button>
          </li>
          <li>
            <Button theme="text">Partners</Button>
          </li>
        </ul>
        <div>
          <img src={logo} alt="Uphold Logo" />
        </div>
        <div className="w-[300px]">
          <Button className="float-right">Log in</Button>
        </div>
      </header>
      <div className="mt-10">
        <Text as="h1" className="text-center">
          Currency Converter
        </Text>
        <Text
          as="h3"
          className="text-gray-400 text-center max-w-md mx-auto mt-4"
        >
          Receive competitive and transparent pricing with no hidden spreads.
          See how we compare.
        </Text>
        <RatesConverter />
        <Separator />
        <Footer />
      </div>
    </div>
  );
}

export default App;
