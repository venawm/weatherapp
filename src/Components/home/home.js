import React,{useState} from 'react';
import CityAction from '../../Redux/Actions/CityAction';
import {useDispatch,useSelector} from 'react-redux'
import styled from 'styled-components'
import Weathercard from './Weathercard';


const Home = () => {
    const[value,setValue] = useState("")
    const[t,setT] = useState("")
    const dispatch = useDispatch();
    

    const input =(e)=> {
    
        setValue(e.target.value)

    }
    const inputHandler =(e)=>{
        e.preventDefault();
        const cityName =e.target.a.value
        dispatch(CityAction(cityName))   
        setValue("") 
        setT("True")
    }
    return (
        <Main>
            <form action="" onSubmit={inputHandler}>
                <input name='a' value={value} onChange={input} type="text" />
            </form>
            {t&&<Weathercard/>}
        </Main>
    );
};

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
form{
    input{
        height: 2rem;
        width: 30vw;
    }
}


`
export default Home;