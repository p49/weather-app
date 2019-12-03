
const key = 'Jm6wFIAehfaTjXMKMzXI6FymcKMMEY1X';

// get weather info
const getWeather = async (cityCode) => {

  const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${cityCode}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};


// get city info
const getCity = async (city) => {

  const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return(data[0]);
};
