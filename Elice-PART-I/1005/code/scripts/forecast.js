const key = 'iG2YKHOj5x1M7yvG8B6w9OTIAJCIcbE0';

//query 명령어의 일종.
// database 에 저장된 정보를 찾거나 저장된 글 목록을 삭제, 입력 명령어

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    // console.log(data[0]);
    return data[0];
}


const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const resposne = await fetch(base + query);
    const data = await resposne.json();

    // console.log(data);
    return data[0];
}

// getCity('seoul')

// getCity('seoul')
//     .then(data => {
//         return getWeather(data.Key);
//     }).catch(err => console.log(err));

// http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}
// https://trends.google.co.kr/trends/explore?q=iphone&date=now%201-d&geo=KR&hl=ko






