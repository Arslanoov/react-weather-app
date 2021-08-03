import React from 'react';

import { Layout } from 'antd';

import Header from 'weather/layouts/header';
import Footer from 'weather/layouts/footer';
import Sidebar from 'weather/layouts/sidebar';

import './index.scss';

const WeatherLayout: React.FC = ({ children }) => (
  <Layout className="weather-layout">
    <Header />
    <Layout>
      <Sidebar />
      <Layout.Content className="weather-layout__content">
        {children}
      </Layout.Content>
    </Layout>
    <Footer />
  </Layout>
);

export default WeatherLayout;
