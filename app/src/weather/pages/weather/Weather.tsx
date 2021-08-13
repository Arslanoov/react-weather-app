import React, { useEffect } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import {
  fetchCityWeather,
  fetchDailyForecast,
  clearFetchError,
  currentWeatherSelector,
  fetchErrorSelector,
  forecastSelector, fetchLoadingSelector,
} from 'store/slices/weather';

import WeatherLayout from 'weather/layouts/weather-layout/WeatherLayout';
import WeatherCardRow from 'weather/components/presentational/weather-card-row';
import ForecastCardList from 'weather/components/presentational/forecast/forecast-card-list';
import Loader from 'weather/components/presentational/loader';

import './index.scss';

interface RouteParams {
  city: string
}

type Props = ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps> &
RouteComponentProps<RouteParams> & {
  city: string
};

const Weather: React.FC<Props> = ({
  error,
  currentWeather,
  forecast,
  fetchForecast,
  fetch,
  clearError,
  loading,
  match: { params: { city } },
}) => {
  useEffect(() => {
    clearError();
    fetch(city);
    fetchForecast(city);
  }, []);

  if (error && currentWeather?.name === city) {
    return <Redirect to="/" />;
  }

  return (
    <WeatherLayout>
      <div className="weather">
        {currentWeather && (
          <WeatherCardRow
            className="weather__current"
            data={currentWeather}
            canAdd={false}
            canDelete={false}
            withActions={false}
            extended
            detailed
          />
        )}
        {loading && <Loader />}
        {forecast && (
          <div className="weather__forecast">
            <ForecastCardList forecast={forecast} />
          </div>
        )}
      </div>
    </WeatherLayout>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentWeather: currentWeatherSelector(state),
  forecast: forecastSelector(state),
  error: fetchErrorSelector(state),
  loading: fetchLoadingSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  clearError: () => dispatch(clearFetchError()),
  fetch: (name: string) => dispatch(fetchCityWeather(name)),
  fetchForecast: (name: string) => dispatch(fetchDailyForecast(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);
