import React from 'react';

import { Layout } from 'antd';

import Header from 'weather/layouts/header';
import Footer from 'weather/layouts/footer';
import Sidebar from 'weather/layouts/sidebar';

import './index.scss';

const WeatherLayout: React.FC = ({ children }) => (
  <Layout className="weather-layout">
    <Sidebar />
    <Layout>
      <Header />
      <Layout.Content className="weather-layout__content">
        {children}
      </Layout.Content>
      <Footer />
    </Layout>
  </Layout>
);

export default WeatherLayout;
