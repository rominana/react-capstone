const currencyFormat = (numberInDollars) => {
  const numberInMillions = numberInDollars / 1000000;
  return numberInMillions.toLocaleString();
};

export default currencyFormat;
