import { Dispatch } from 'redux'
import { WeatherAction } from '../actions'
import { WeatherActionType } from '../action-types'

import WeatherService from '../../weather/services/weatherService'

export const clearWeatherAndForecastData = () => ({
  type: WeatherActionType.CLEAR_WEATHER_AND_FORECAST_DATA,
})

export const getWeatherByCity = (weatherService: WeatherService, city: string) => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    dispatch({
      type: WeatherActionType.GET_WEATHER_BY_CITY_REQUESTED,
      payload: city,
    })
    dispatch({
      type: WeatherActionType.GET_DAILY_FORECAST_BY_CITY_REQUESTED,
    })

    try {
      const weather = await weatherService.getWeatherByCityName(city)
      dispatch({
        type: WeatherActionType.GET_WEATHER_BY_CITY_LOADED,
        payload: weather,
      })
    } catch (e) {
      // TODO: Catch error
    }

    try {
      const forecast = await weatherService.getDailyForecastByCityName(city)
      dispatch({
        type: WeatherActionType.GET_DAILY_FORECAST_BY_CITY_LOADED,
        payload: forecast,
      })
    } catch (e) {
      // TODO: Catch error
    }
  }
}
