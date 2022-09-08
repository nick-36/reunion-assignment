export const filterByDate = (arr, date) => {
  if (date) {
    return arr.filter((item) => {
      return item.moveInDate === date;
    });
  } else {
    return arr;
  }
};

export const filterByLocation = (arr, city) => {
  if (city) {
    let { value } = city;
    return arr.filter((item) => {
      return item.address.city.toLowerCase() === value.toLowerCase();
    });
  } else {
    return arr;
  }
};

export const filterByPrice = (arr, price) => {
  if (price) {
    let [minPrice, maxPrice] = price.value.split("-");
    return arr.filter((item) => {
      return item.price >= +minPrice && item.price <= +maxPrice;
    });
  } else {
    return arr;
  }
};

export const filterByType = (arr, type) => {
  if (type) {
    let { value } = type;
    return arr.filter((item) => {
      return item.type.toLowerCase() === value.toLowerCase();
    });
  } else {
    return arr;
  }
};
