import React,{useState} from 'react';
import CityAction from '../../Redux/Actions/CityAction';
import {useDispatch,useSelector} from 'react-redux'
import styled from 'styled-components'
import Weathercard from './Weathercard';


const Home = () => {
    const[value,setValue] = useState("")
    const dispatch = useDispatch();

    const input =(e)=> {
    
        setValue(e.target.value)

    }
    const inputHandler =(e)=>{
        e.preventDefault();
        const cityName =e.target.a.value
        dispatch(CityAction(cityName))   
        setValue("") 
    }
    return (
        <Main>
            <form action="" onSubmit={inputHandler}>
                <input name='a' value={value} onChange={input} type="text" />
            </form>
            <Weathercard/>
        </Main>
    );
};

const Main = styled.div`

`
export default Home;