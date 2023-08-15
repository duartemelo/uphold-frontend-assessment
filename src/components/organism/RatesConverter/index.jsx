import React from "react";

function RatesConverter() {
  return (
    <>
      <div className="bg-gray-100 w-min rounded-lg mx-auto mt-10 flex items-center">
        <input
          type="number"
          className="text-4xl text-gray-400 bg-gray-100 p-4 rounded-lg block"
          placeholder={0}
        />
        <div className="w-16 h-9 bg-red-400" />
      </div>
      <div>
        <p className="text-center mt-6 text-gray-400">
          Enter an amount to check the rates.
        </p>
        <div className="h-[500px]" />
      </div>
    </>
  );
}

export default RatesConverter;
