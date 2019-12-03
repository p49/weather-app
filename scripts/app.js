

const cityForm = document.querySelector('form');

// updating the UI
const card = document.querySelector('.card');
const details = document.querySelector('.details');

// updating the image & icon
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


//UPDATE UI FUNCTION
const updateUI = (data) => {
  // destructuring
  const { cityDeets, weather } = data;
      
    // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDeets.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
        <span>${weather.Temperature.Imperial.Value}</span>
        <span>&deg;F</span>
      </div>
    `;

    // update the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // IF/ELSE changed to ternary operator:
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);
       
    // remove the d-none class if present
    if(card.classList.contains('d-none')) {
      card.classList.remove('d-none');
    }
};


// UPDATE CITY FUNCTION
const updateCity = async (city) => {
  const cityDeets = await getCity(city);
  const weather = await getWeather(cityDeets.Key);

  return { cityDeets, weather };

};


// UPDATE USER INPUT FORM FUNCTION
cityForm.addEventListener('submit', e => {
  e.preventDefault();
 
  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the UI with new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));


  // set local storage
  localStorage.setItem('location', city)

});


// IF STATEMENT FOR LOCAL STORAGE
// if(localStorage.getItem('location')) {
//   updateCity(localStorage.getItem('location'))
//     .then(data => updateUI(data))
//     .catch(err => console.log(err));
// }


