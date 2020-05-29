import axios from 'axios'
import { GET_FIVE_DAY_BY_ZIP_PENDING, GET_FIVE_DAY_BY_ZIP_SUCCESS, GET_FIVE_DAY_BY_ZIP_FAILED, GET_FIVE_DAY_BY_CITY_SUCCESS, GET_FIVE_DAY_BY_CITY_PENDING, GET_FIVE_DAY_BY_CITY_FAILED } from './constants'

const openWeatherAPIKey = "3738ec76690466dbf0f33c4d5262a246"
const openWeatherBaseURL = "api.openweathermap.org/data/2.5/forecast"

export const getFiveDayByZIP = zipCode => {
    return dispatch => {
        dispatch({
            type: GET_FIVE_DAY_BY_ZIP_PENDING
        })
        axios.get(`${openWeatherBaseURL}?zip=${zipCode},us&appid=${openWeatherAPIKey}`)
            .then(res => {
                let fiveDayForecast = res.data
                dispatch({
                    type: GET_FIVE_DAY_BY_ZIP_SUCCESS,
                    payload: fiveDayForecast
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_FIVE_DAY_BY_ZIP_FAILED,
                    payload: error
                })
            })
    }
}

export const getFiveDayByCity = (city, stateCode) => {
    return dispatch => {
        dispatch({
            type: GET_FIVE_DAY_BY_CITY_PENDING
        })
        axios.get(`${openWeatherBaseURL}?q=${city},${stateCode}&appid=${openWeatherAPIKey}`)
            .then(res => {
                let fiveDayForecast = res.data
                dispatch({
                    type: GET_FIVE_DAY_BY_CITY_SUCCESS,
                    payload: fiveDayForecast
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_FIVE_DAY_BY_CITY_FAILED,
                    payload: error
                })
            })
    }
}