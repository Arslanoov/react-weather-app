import React from 'react';

import WeatherLayout from 'weather/layouts/weather-layout';
import SavedCitiesList from 'weather/components/container/saved-cities-list/SavedCitiesList';
import SavedCitiesManage from 'weather/components/container/saved-cities-manage/SavedCitiesManage';

import './index.scss';

type Props = {};

const Home: React.FC<Props> = () => (
  <WeatherLayout>
    <div className="home">
      <SavedCitiesList />
      <SavedCitiesManage className="home__manage" />
    </div>
  </WeatherLayout>
);

export default Home;
