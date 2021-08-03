import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import { citySelector, fetchCity as fetchCityAction } from 'store/slices/weather';

import WeatherLayout from 'weather/layouts/weather-layout';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {};

const Home: React.FC<Props> = ({ city, fetchCity }) => {
  useEffect(() => {
    fetchCity();
  }, []);

  return (
    <WeatherLayout>
      <div className="home">Home page</div>
      <div>{city}</div>
    </WeatherLayout>
  );
};

const mapStateToProps = (state: RootState) => ({
  city: citySelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchCity: () => dispatch(fetchCityAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
