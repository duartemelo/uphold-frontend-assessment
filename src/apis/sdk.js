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

export default getRates;
