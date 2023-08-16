import React, { useState, useEffect } from "react";
import CustomSelect from "../../molecule/CustomSelect";
import Option from "../../molecule/CustomSelect/components/Option";
import RatesContainer from "../RatesContainer";
import getRatesForAvailableCurrencies from "../../../apis/sdk";
import flags from "../../../utils/getFlags";
import formatCurrency from "../../../utils/currencyValues";

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

  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [rates, setRates] = useState([]);
  const [shownRates, setShownRates] = useState([]);
  const [ratesLoading, setRatesLoading] = useState(false);

  let debounceTimer;

  useEffect(() => {
    setRatesLoading(true);
    getRatesForAvailableCurrencies(selectedCurrency.value, Object.keys(flags))
      .then((response) => {
        setRates(response);
      })
      .catch(() => {})
      .finally(() => {
        setRatesLoading(false);
      });
  }, [selectedCurrency.value, getRatesForAvailableCurrencies]);

  useEffect(() => {
    if (debouncedValue !== "" && debouncedValue !== "0") {
      const updatedShownRates = rates.map((rate) => ({
        ...rate,
        ask: formatCurrency(rate.ask * parseFloat(debouncedValue)),
      }));
      setShownRates(updatedShownRates);
    } else {
      setShownRates([]);
    }
  }, [debouncedValue, rates, setShownRates]);

  const handleSelectCurrency = (value) => {
    setSelectedCurrency(value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      setDebouncedValue(event.target.value);
    }, 1000);
  };

  return (
    <>
      <div className="bg-gray-100 w-min rounded-lg mx-auto mt-10 flex items-center">
        <input
          type="number"
          className="text-4xl placeholder:text-gray-400 text-gray-700 bg-gray-100 p-4 rounded-lg block"
          placeholder={0}
          value={inputValue}
          onChange={handleInputChange}
        />
        <CustomSelect
          className="mx-2"
          options={options}
          value={selectedCurrency}
          onChange={handleSelectCurrency}
        />
      </div>
      <RatesContainer isLoading={ratesLoading} rates={shownRates} />
    </>
  );
}

export default RatesConverter;
