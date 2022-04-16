import React from 'react';
import axios from 'axios';


const CityAction = (cityName) => async(dispatch)=> {
    console.log(cityName)
    const key = 'c310d2324ec409b97c2b7c9725574b2b';
    const cityData =  await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${key}`) 
    const lat = await cityData.data[0].lat
    const lon = await cityData.data[0].lon

    const weatherDetails = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`)
    const temperature =  weatherDetails.data.main
    const weather = weatherDetails.data.weather[0]
    const name = weatherDetails.data.name
    console.log(weatherDetails)
    
    dispatch({
        type: "FETCH_WEATHER",
        payload:{
            Weather :temperature,
            weatherCondition : weather,
            Name : name

        }
    })

  
};

export default CityAction;