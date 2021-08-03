import React from 'react';

import { Layout, Menu } from 'antd';

const Header = () => (
  <Layout.Header>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      {new Array(15).fill(null).map((_, index) => {
        const key = index + 1;
        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
      })}
    </Menu>
  </Layout.Header>
);

export default Header;
