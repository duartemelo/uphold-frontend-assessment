import React from "react";
import PropTypes from "prop-types";

import Text from "../../atom/Text";
import Spinner from "../../atom/Spinner";
import Currency from "../../molecule/Currency";

import flags from "../../../utils/getFlags";

import "./styles.css";

function RatesContainer({ isLoading, hasError, rates }) {
  let renderContent;

  if (hasError) {
    renderContent = (
      <Text as="p" className="text-center mt-6 text-gray-400">
        There was an error getting rates.
      </Text>
    );
  } else if (isLoading) {
    renderContent = <Spinner className="mt-8 w-10 h-10" />;
  } else if (rates.length === 0) {
    renderContent = (
      <Text as="p" className="text-center mt-6 text-gray-400">
        Enter an amount to check the rates.
      </Text>
    );
  } else if (rates.length > 0) {
    renderContent = (
      <div className="currencies-wrapper h-[500px] max-w-[550px] w-full mx-auto mt-4 overflow-auto mb-16 px-4">
        {rates.map((rate) => (
          <Currency
            key={rate.currency}
            value={rate.ask}
            flagImageSrc={flags[rate.currency]}
            flagLabel={rate.currency}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[650px] items-center">
      {renderContent}
    </div>
  );
}

RatesContainer.propTypes = {
  rates: PropTypes.arrayOf(
    PropTypes.shape({
      ask: PropTypes.number.isRequired,
      bid: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      pair: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
};

RatesContainer.defaultProps = {
  rates: [],
  isLoading: false,
  hasError: false,
};

export default RatesContainer;
