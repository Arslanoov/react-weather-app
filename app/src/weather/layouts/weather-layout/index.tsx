import React from 'react';

import { Layout } from 'antd';

import Header from 'weather/layouts/header';
import Footer from 'weather/layouts/footer';
import Sidebar from 'weather/layouts/sidebar';

const WeatherLayout: React.FC = ({ children }) => (
  <Layout>
    <Header />
    <Layout>
      <Sidebar />
      <Layout.Content style={{ padding: '10px 20px' }}>{children}</Layout.Content>
    </Layout>
    <Footer />
  </Layout>
);

export default WeatherLayout;
