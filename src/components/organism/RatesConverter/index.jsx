import React, { useState } from "react";
import CustomSelect from "../../molecule/CustomSelect";
import Option from "../../molecule/CustomSelect/components/Option";
import RatesContainer from "../RatesContainer";
// import getRates from "../../../apis/sdk";
import flags from "./getFlags";

const options = Object.keys(flags).map((currency) => ({
  value: currency,
  label: <Option imageSrc={flags[currency]} label={currency} />,
}));

function RatesConverter() {
  const defaultSelectedCurrency = options.find(
    (option) => option.value === "USD"
  );
  const [selectedCurrency, setSelectedCurrency] = useState(
    defaultSelectedCurrency
  );

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getRates("EUR").then((response) => {
  //     console.log(response);
  //   });
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  const handleSelectValue = (value) => {
    setSelectedCurrency(value);
  };

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
          options={options}
          value={selectedCurrency}
          onChange={handleSelectValue}
        />
      </div>
      <RatesContainer />
    </>
  );
}

export default RatesConverter;
