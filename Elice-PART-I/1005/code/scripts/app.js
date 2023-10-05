const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
    // const cityInfo = data.cityInfo;
    // const weather = data.weather;

    const { cityInfo, weather } = data;

    // console.log(cityInfo);
    // console.log(weather);

    //boolean 데이터를 제공해 주니까요.
    if (weather.IsDayTime) {
        details.innerHTML = `
        <img class="card-img-top" src="./img/dayimage.png">
        <h5 class="my-3">${cityInfo.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>`
    } else {
        details.innerHTML = `
        <img class="card-img-top" src="./img/nightimage.png">
        <h5 class="my-3">${cityInfo.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>`
    }

    // details.innerHTML = `
    //     <h5 class="my-3">${cityInfo.EnglishName}</h5>
    //       <div class="my-3">${weather.WeatherText}</div>
    //       <div class="display-4 my-4">
    //         <span>${weather.Temperature.Metric.Value}</span>
    //         <span>&deg;C</span>
    //       </div>`

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}

const updateCity = async (city) => {
    const cityInfo = await getCity(city);
    const weather = await getWeather(cityInfo.Key);

    // return {
    //     cityInfo: cityInfo,
    //     weather: weather
    // }

    return { cityInfo, weather }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value;
    // console.log(city);

    // updateCity(city)
    //     .then(data => console.log(data));

    updateCity(city)
        .then(data => updateUI(data))
});