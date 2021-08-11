import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import {
  fetchCityWeather, clearFetchError, currentWeatherSelector, fetchErrorSelector,
} from 'store/slices/weather';

import WeatherLayout from 'weather/layouts/weather-layout/WeatherLayout';
import WeatherCardRow from 'weather/components/presentational/weather-card-row';

import './index.scss';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {
  city: string
};

const Weather: React.FC<Props> = ({
  city, error, currentWeather, fetch, clearError,
}) => {
  useEffect(() => {
    clearError();
    fetch(city);
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
      </div>
    </WeatherLayout>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentWeather: currentWeatherSelector(state),
  error: fetchErrorSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  clearError: () => dispatch(clearFetchError()),
  fetch: (name: string) => dispatch(fetchCityWeather(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);
