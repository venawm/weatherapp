import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import img from '../../Img/img.jpg'
import styled from 'styled-components'

const Weathercard = () => {
    const weatherDetails = useSelector(state=>state.Weather.weatherdetails)
    const weatherCondition = useSelector(state=>state.Weather.weatherCondition)
    const Name = useSelector(state=>state.Weather.Name)
    console.log(weatherDetails.icon)
    const iconUrl = `http://openweathermap.org/img/wn/${weatherCondition.icon}@2x.png`
    console.log(weatherDetails)
    console.log(weatherCondition)
    return (
        <MainDiv>
            <h1>{Name}</h1>
            <img src={img} alt="" />
            <div className='Temp'>
            <img src={iconUrl} alt="" />
            <h2>Temperature:{weatherDetails.temp}</h2>
            </div>
            <div className="max-min">
                <h3>Max:{weatherDetails.temp_max}</h3>
                <h3>Min:{weatherDetails.temp_min}</h3>
            </div>
            <h3>{weatherCondition.description}</h3>
            </MainDiv>
    );
};

const MainDiv = styled.div`
margin-top: 1rem;
width: 25vw;
height: 75vh;
box-shadow: 3px 01px 10px #d6d6d6;
display: flex;
flex-direction: column;
align-items: center;
img{
    width: 80%;
}
.Temp{
    display: flex;
    flex-direction: row;

}

`

export default Weathercard;