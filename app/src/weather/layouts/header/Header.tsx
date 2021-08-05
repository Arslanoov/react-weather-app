import React from 'react';

import { Layout } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import './index.scss';

const Header = () => (
  <Layout.Header className="header">
    <MenuUnfoldOutlined className="header__trigger" onClick={() => {}} />
    <h1 className="header__title">Weather App</h1>
  </Layout.Header>
);

export default Header;
