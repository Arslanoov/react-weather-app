import React from 'react';

import { Layout, Menu } from 'antd';

import './index.scss';

const Header = () => (
  <Layout.Header className="header">
    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key={1}>Item 1</Menu.Item>
      <Menu.Item key={2}>Item 2</Menu.Item>
      <Menu.Item key={3}>Item 3</Menu.Item>
    </Menu>
  </Layout.Header>
);

export default Header;
