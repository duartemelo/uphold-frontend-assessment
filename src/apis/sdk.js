import SDK from "@uphold/uphold-sdk-javascript";

const sdk = new SDK({
  baseUrl: "http://api-sandbox.uphold.com",

  clientId: "foo",
  clientSecret: "bar",
});

const getRates = async (pair) => {
  const rates = await sdk.getTicker(pair);
  return rates;
};

const getTargetCurrencyFromPair = (baseCurrency, pair) =>
  pair.replace(baseCurrency, "").replace("-", "");

const getRatesForAvailableCurrencies = async (
  currency,
  availableCurrencies
) => {
  const rates = await getRates(currency);
  const filteredRates = rates.filter(
    (rate) =>
      availableCurrencies.includes(
        getTargetCurrencyFromPair(currency, rate.pair)
      ) && rate.currency !== currency // only returns pairs like BTCEUR and not EURBTC (if basecurrency is 'EUR')
  );
  return filteredRates;
};

export default getRatesForAvailableCurrencies;
