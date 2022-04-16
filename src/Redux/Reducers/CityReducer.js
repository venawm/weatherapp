
const initState = {
   weatherdetails:[],
   weatherCondition:[],
   Name :""

}

const CityReducer = (state= initState,action)=>{
    switch(action.type){
        case "FETCH_WEATHER":
            return{...state,weatherdetails:action.payload.Weather,
                weatherCondition:action.payload.weatherCondition,
                Name:action.payload.Name
            }
        default:
            return{...state}
    }
    
}
export default CityReducer;