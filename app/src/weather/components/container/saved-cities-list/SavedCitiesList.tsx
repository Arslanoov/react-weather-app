import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import { fetchSavedCitiesWeather, savedWeatherSelector } from 'store/slices/savedCities';

import WeatherCardList from 'weather/components/presentational/weather-card-list';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {};

const SavedCitiesList: React.FC<Props> = ({ savedWeather, fetchList }) => {
  useEffect(() => {
    fetchList();
  }, []);

  return <WeatherCardList items={savedWeather} />;
};

const mapStateToProps = (state: RootState) => ({
  savedWeather: savedWeatherSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchList: () => dispatch(fetchSavedCitiesWeather()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedCitiesList);
