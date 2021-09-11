import React from 'react';

import { useThemeSwitcher } from 'react-css-theme-switcher';

import { Layout } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import './index.scss';

type Props = {
  className: string;
  toggleSidebar: () => void;
};

const Header: React.FC<Props> = ({ className, toggleSidebar }) => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <Layout.Header className={`header ${className} ${currentTheme === 'light' ? 'header__light' : ''}`}>
      <MenuUnfoldOutlined className="header__trigger" onClick={() => toggleSidebar()} />
      <h1 className="header__title">Weather App</h1>
    </Layout.Header>
  );
};

export default Header;
