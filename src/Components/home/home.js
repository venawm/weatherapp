import React from 'react';
import CityAction from '../../Redux/Actions/CityAction';
import {useDispatch,useSelector} from 'react-redux'
import styled from 'styled-components'
import Weathercard from './Weathercard';

const Home = (e) => {
    const dispatch = useDispatch();

    const inputHandler =(e)=>{
        e.preventDefault();
        const cityName =e.target.a.value
        dispatch(CityAction(cityName))
        
        
    }
    return (
        <Main>
            <form action="" onSubmit={inputHandler}>
                <input name='a'  type="text" />
            </form>
            <Weathercard/>
        </Main>
    );
};

const Main = styled.div`

`
export default Home;