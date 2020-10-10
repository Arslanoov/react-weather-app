import * as React from 'react';

import MainLayout from "../../../common/layouts/MainLayout";

const WeatherLayout: React.FunctionComponent = ({ children }) => {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
};

export default WeatherLayout;
