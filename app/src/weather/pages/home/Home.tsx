import React from 'react';

import WeatherLayout from 'weather/layouts/weather-layout';
import SavedCitiesList from 'weather/components/container/saved-cities-list/SavedCitiesList';

type Props = {};

const Home: React.FC<Props> = () => (
  <WeatherLayout>
    <SavedCitiesList />
  </WeatherLayout>
);

export default Home;
