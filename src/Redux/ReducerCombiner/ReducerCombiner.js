import {combineReducers} from 'redux'
import CityReducer from '../Reducers/CityReducer';

const mainReducers =combineReducers({
    Weather : CityReducer
   
})
export default mainReducers;