
const initState = {
   weatherdetails:[],
   weatherCondition:[]

}

const CityReducer = (state= initState,action)=>{
    switch(action.type){
        case "FETCH_WEATHER":
            return{...state,weatherdetails:action.payload.Weather,
                weatherCondition:action.payload.weatherCondition}
        default:
            return{...state}
    }
    
}
export default CityReducer;