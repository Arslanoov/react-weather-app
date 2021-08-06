import React from 'react';

import { Layout } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import './index.scss';

type Props = {
  toggleSidebar: () => void;
};

const Header: React.FC<Props> = ({ toggleSidebar }) => (
  <Layout.Header className="header">
    <MenuUnfoldOutlined className="header__trigger" onClick={() => toggleSidebar()} />
    <h1 className="header__title">Weather App</h1>
  </Layout.Header>
);

export default Header;
