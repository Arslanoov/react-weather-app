import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import {
  fetchSavedCitiesWeather,
  removeSavedCity,
  savedWeatherLoadingSelector,
  savedWeatherSelector,
} from 'store/slices/savedCities';

import WeatherCardList from 'weather/components/presentational/weather-card-list';
import Loader from 'weather/components/presentational/loader';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {};

const SavedCitiesList: React.FC<Props> = ({
  savedWeather, fetchList, removeCity, loading,
}) => {
  useEffect(() => {
    fetchList();
  }, []);

  if (loading) {
    return (
      <Loader />
    );
  }

  return <WeatherCardList onItemDelete={removeCity} items={savedWeather} />;
};

const mapStateToProps = (state: RootState) => ({
  savedWeather: savedWeatherSelector(state),
  loading: savedWeatherLoadingSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchList: () => dispatch(fetchSavedCitiesWeather()),
  removeCity: (name: string) => dispatch(removeSavedCity(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedCitiesList);
