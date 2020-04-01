export const OffersRestriction = {
  MAX_RATING: 5,
  MAX_CITIES_COUNT: 6,
  MAX_IMAGES_QUANTITY: 6,
  MAX_REVIEWS_QUANTITY: 10,
  MIN_REVIEW_LENGTH: 50,
  MAX_REVIEW_LENGTH: 300,
  MAX_NEARBY_OFFERS_QUANTITY: 3,
  MAX_MAP_OFFERS_QUANTITY: 4,
};

export const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const CITIES = [
  City.PARIS,
  City.COLOGNE,
  City.BRUSSELS,
  City.AMSTERDAM,
  City.HAMBURG,
  City.DUSSELDORF
];

export const CityCoordinates = {
  Paris: [48.85341, 2.3488],
  Cologne: [50.93333, 6.95],
  Brussels: [50.85045, 4.34878],
  Amsterdam: [52.38333, 4.9],
  Hamburg: [53.55532, 10.01534],
  Dusseldorf: [51.22172, 6.77616],
};

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`,
};

export const AuthorizationStatus = {
  AUTHORIZED: `AUTHORIZED`,
  UNAUTHORIZED: `UNAUTHORIZED`,
  UNKNOWN: `UNKNOWN`,
  NO_AUTH: `NO_AUTH`,
};

export const ServerResponseStatusCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};
