import React from 'react';

import { Layout } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import './index.scss';

const Header = () => (
  <Layout.Header className="header" style={{ padding: 0 }}>
    {React.createElement(MenuUnfoldOutlined, {
      className: 'trigger',
      /* onClick: this.toggle, */
    })}

    <h1>Weather App</h1>
  </Layout.Header>
);

export default Header;
