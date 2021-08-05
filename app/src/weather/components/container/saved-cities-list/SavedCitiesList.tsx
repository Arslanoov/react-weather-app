import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import { fetchSavedCitiesWeather, removeSavedCity, savedWeatherSelector } from 'store/slices/savedCities';

import WeatherCardList from 'weather/components/presentational/weather-card-list';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {};

const SavedCitiesList: React.FC<Props> = ({ savedWeather, fetchList, removeCity }) => {
  useEffect(() => {
    fetchList();
  }, []);

  return <WeatherCardList onItemDelete={removeCity} items={savedWeather} />;
};

const mapStateToProps = (state: RootState) => ({
  savedWeather: savedWeatherSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchList: () => dispatch(fetchSavedCitiesWeather()),
  removeCity: (name: string) => dispatch(removeSavedCity(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedCitiesList);
