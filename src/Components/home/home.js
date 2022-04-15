import React from 'react';
import CityAction from '../../Redux/Actions/CityAction';
import {useDispatch,useSelector} from 'react-redux'
import Weathercard from './Weathercard';

const Home = (e) => {
    const dispatch = useDispatch();
    const weatherDetails = useSelector(state=>state.Weather.weatherdetails)
    const weatherCondition = useSelector(state=>state.Weather.weatherCondition)
    console.log(weatherCondition)
    console.log(weatherDetails)
    const inputHandler =(e)=>{
        e.preventDefault();
        const cityName =e.target.a.value
        dispatch(CityAction(cityName))
        
        
    }
    return (
        <div className='home'>
            <form action="" onSubmit={inputHandler}>
                <input name='a'  type="text" />
            </form>
            <Weathercard/>
        </div>
    );
};

export default Home;