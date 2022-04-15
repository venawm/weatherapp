import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import styled from 'styled-components'

const Weathercard = () => {
    const weatherDetails = useSelector(state=>state.Weather.weatherdetails)
    const weatherCondition = useSelector(state=>state.Weather.weatherCondition)
    console.log(weatherDetails.icon)
    const iconUrl = `http://openweathermap.org/img/wn/${weatherCondition.icon}@2x.png`
    console.log(weatherDetails)
    console.log(weatherCondition)
    return (
        <MainDiv>
            <h1>City Name</h1>
            <img src="" alt="" />
            <img src={iconUrl} alt="" />
            <h2>Temperature:{weatherDetails.temp}</h2>
            <div className="max-min">
                <h3>Max:{weatherDetails.temp_max}</h3>
                <h3>Min:{weatherDetails.temp_min}</h3>
            </div>
            <h3>{weatherCondition.description}</h3>
            </MainDiv>
    );
};

const MainDiv = styled.div`


`

export default Weathercard;