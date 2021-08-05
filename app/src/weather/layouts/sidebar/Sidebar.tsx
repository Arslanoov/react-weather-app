import React from 'react';

import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

import './index.scss';

const Sidebar = () => (
  <Layout.Sider className="sidebar" trigger={null} collapsible>
    <div className="sidebar__logo" />
    <Menu className="sidebar__menu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        nav 1
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        nav 2
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        nav 3
      </Menu.Item>
    </Menu>
  </Layout.Sider>
);

export default Sidebar;
