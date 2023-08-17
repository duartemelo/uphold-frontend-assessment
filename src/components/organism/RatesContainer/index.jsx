import React from "react";
import PropTypes from "prop-types";
import Currency from "../../molecule/Currency";
import Spinner from "../../atom/Spinner";
import flags from "../../../utils/getFlags";
import "./styles.css";

function RatesContainer({ isLoading, rates }) {
  return (
    <div className="flex flex-col min-h-[650px] items-center">
      {isLoading && <Spinner className="mt-8 w-10 h-10" />}

      {!isLoading && rates.length === 0 && (
        <p className="text-center mt-6 text-gray-400">
          Enter an amount to check the rates.
        </p>
      )}

      {!isLoading && rates.length > 0 && (
        <div className="currencies-wrapper h-[500px] max-w-[550px] w-full mx-auto mt-4 overflow-auto mb-16 px-4">
          {rates.map((rate) => (
            <Currency
              value={rate.ask}
              flagImageSrc={flags[rate.currency]}
              flagLabel={rate.currency}
            />
          ))}
        </div>
      )}
    </div>
  );
}

RatesContainer.propTypes = {
  rates: PropTypes.arrayOf(
    PropTypes.shape({
      ask: PropTypes.string.isRequired,
      bid: PropTypes.node.isRequired,
      currency: PropTypes.string.isRequired,
      pair: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool,
};

RatesContainer.defaultProps = {
  rates: [],
  isLoading: false,
};

export default RatesContainer;
