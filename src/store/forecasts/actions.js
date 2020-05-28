import axios from 'axios'
import { GET_FIVE_DAY_BY_ZIP_PENDING, GET_FIVE_DAY_BY_ZIP_SUCCESS, GET_FIVE_DAY_BY_ZIP_FAILED, GET_FIVE_DAY_BY_CITY_SUCCESS, GET_FIVE_DAY_BY_CITY_PENDING, GET_FIVE_DAY_BY_CITY_FAILED } from './constants'

const openWeatherAPIKey = "3738ec76690466dbf0f33c4d5262a246"
const openWeatherBaseURL = "api.openweathermap.org/data/2.5/forecast"