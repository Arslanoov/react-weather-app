import React from 'react';
import { NavLink } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { AppstoreOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';

import './index.scss';

type Props = {
  isCollapsed: boolean
};

const Sidebar: React.FC<Props> = ({ isCollapsed }) => (
  <Layout.Sider className="sidebar" trigger={null} collapsedWidth={0} collapsed={isCollapsed} collapsible>
    <div className="sidebar__logo" />
    <Menu className="sidebar__menu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="/" icon={<AppstoreOutlined />}>
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
      <Menu.Item key="/search" icon={<SearchOutlined />}>
        <NavLink to="/search">Search</NavLink>
      </Menu.Item>
      <Menu.Item key="/settings" icon={<SettingOutlined />}>
        <NavLink to="/settings">Settings</NavLink>
      </Menu.Item>
    </Menu>
  </Layout.Sider>
);

export default Sidebar;
