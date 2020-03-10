export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersByCity = (city, offers) => {
  return offers.filter((offer) => offer.location.city === city);
};
