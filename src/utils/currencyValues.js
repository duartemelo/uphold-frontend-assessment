function formatNumberWithSixDecimals(valueString) {
  const parsedValue = parseFloat(valueString);
  if (!Number.isNaN(parsedValue)) {
    const formattedValue = parsedValue.toFixed(6);
    return parseFloat(formattedValue);
  }
  return NaN; // Return NaN if parsing fails
}

export default formatNumberWithSixDecimals;
