import * as React from 'react';

import { WeatherServiceConsumer } from '../contexts/WeatherServiceContext';

const withBookstoreService = () => (Wrapped: any) => {
  return (props: any) => {
    return (
      <WeatherServiceConsumer>
        {
          (weatherService) => {
            return (<Wrapped {...props}
             weatherService={weatherService} />);
          }
        }
      </WeatherServiceConsumer>
    );
  }
};

export default withBookstoreService;
