import React from "react";
import CustomSelect from "../../molecule/CustomSelect";
import usd from "../../../assets/images/USD@3x.png";
import eur from "../../../assets/images/EUR@3x.png";
import Option from "../../molecule/CustomSelect/components/Option";

function RatesConverter() {
  return (
    <>
      <div className="bg-gray-100 w-min rounded-lg mx-auto mt-10 flex items-center">
        <input
          type="number"
          className="text-4xl placeholder:text-gray-400 text-gray-700 bg-gray-100 p-4 rounded-lg block"
          placeholder={0}
        />
        <CustomSelect
          className="mx-2"
          options={[
            {
              value: "USD",
              label: <Option imageSrc={usd} label="USD" />,
            },
            { value: "EUR", label: <Option imageSrc={eur} label="EUR" /> },
          ]}
        />
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
