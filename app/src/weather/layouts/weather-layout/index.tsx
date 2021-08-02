import React from 'react';

import { Layout } from 'antd';
const {
  Header,
  Sider,
  Content,
  Footer
} = Layout

const WeatherLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header><div>Header</div></Header>
        <Content>{children}</Content>
        <Footer><div>Footer</div></Footer>
      </Layout>
    </Layout>
  );
};

export default WeatherLayout;
