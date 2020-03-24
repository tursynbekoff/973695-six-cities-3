import {OffersRestriction} from "./const.js";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersByCity = (city, offers) => {
  return offers.filter((offer) => offer.location.city === city);
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getUniqueCities = (offers) => {
  const cities = new Set();
  offers.forEach((offer) => cities.add(offer.location.city));
  return [...cities].slice(0, OffersRestriction.MAX_CITIES_COUNT);
};

export const offersAdapter = (data) => {
  return {
    location: {
      city: data.city.name,
    },
    id: data.id,
    coordinate: [
      data.location.latitude,
      data.location.longitude
    ],
    rentalHost: {
      id: data.host.id,
      hostName: data.host.name,
      hostAvatar: data.host.avatar_url,
      isSuper: data.host.is_pro,
    },
    description: data.title,
    imgSrc: [data.preview_image, ...data.images],
    price: data.price,
    rating: data.rating,
    type: capitalizeFirstLetter(data.type),
    isPremium: data.is_premium,
    isBookmark: data.is_favorite,
    rentalDescription: [data.description],
    roomQuantity: data.bedrooms,
    guestQuantity: data.max_adults,
    rentalFeatures: data.goods,
    reviews: [
      {
        id: 0,
        name: `Adam`,
        avatar: `img/avatar-max.jpg`,
        rating: 4,
        date: new Date(2020, 0, 12),
        review: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
      },
      {
        id: 1,
        name: `Mary`,
        avatar: `img/avatar-angelina.jpg`,
        rating: 5,
        date: new Date(2020, 2, 15),
        review: `The building is in between the beach and metro station, 5 mins walking distance to both; 5 stops away from the Gothic Quarter by metro.`,
      },
      {
        id: 2,
        name: `Alex`,
        avatar: `img/avatar.svg`,
        rating: 5,
        date: new Date(2020, 1, 28),
        review: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
      },
    ],
  };
};
