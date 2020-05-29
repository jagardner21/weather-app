import { GET_FIVE_DAY_BY_ZIP_PENDING, GET_FIVE_DAY_BY_ZIP_SUCCESS, GET_FIVE_DAY_BY_ZIP_FAILED, GET_FIVE_DAY_BY_CITY_PENDING, GET_FIVE_DAY_BY_CITY_SUCCESS, GET_FIVE_DAY_BY_CITY_FAILED } from './constants'

let initialState = {
    fiveDayForecast: {},
    err: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_FIVE_DAY_BY_ZIP_PENDING:
        case GET_FIVE_DAY_BY_CITY_PENDING:
            return state;
        
        case GET_FIVE_DAY_BY_ZIP_FAILED:
        case GET_FIVE_DAY_BY_CITY_FAILED:
            let error = action.payload;
            return {
                ...state,
                err: error
            }

        case GET_FIVE_DAY_BY_ZIP_SUCCESS:
            let byZIPForecast = action.payload;
            return {
                ...state,
                fiveDayForecast: byZIPForecast
            }

        case GET_FIVE_DAY_BY_CITY_SUCCESS: 
            let byCityForecast = action.payload;
            return {
                ...state,
                fiveDayForecast: byCityForecast
            }
        
        default: return state;
    }
}