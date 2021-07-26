import * as React from 'react';

import { WeatherServiceConsumer } from '../contexts/WeatherServiceContext';

const withWeatherService = () => (Wrapped: any) => {
  return (props: any) => {
    return (
      <WeatherServiceConsumer>
        {
          (weatherServiceInstance) => {
            return (<Wrapped {...props}
             weatherService={weatherServiceInstance} />);
          }
        }
      </WeatherServiceConsumer>
    );
  }
};

export default withWeatherService;
