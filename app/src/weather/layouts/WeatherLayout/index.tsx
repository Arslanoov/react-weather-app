import * as React from 'react'

import MainLayout from '../../../common/layouts/MainLayout'

const WeatherLayout: React.FC = ({ children }) => (
  <MainLayout>
    {children}
  </MainLayout>
)

export default WeatherLayout
