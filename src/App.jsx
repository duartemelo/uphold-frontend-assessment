import React from "react";

import Separator from "./components/atom/Separator";
import Text from "./components/atom/Text";
import Footer from "./components/organism/Footer";
import Header from "./components/organism/Header";
import RatesConverter from "./components/organism/RatesConverter";

function App() {
  return (
    <div>
      <Header />
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
        <Separator className="max-w-[1500px]" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
