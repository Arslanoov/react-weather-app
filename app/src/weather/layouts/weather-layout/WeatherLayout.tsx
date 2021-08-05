import React from 'react';
import { connect } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import { isCollapsedSidebarSelector, toggleSidebar as toggleSidebarAction } from 'store/slices/sidebar';

import { Layout } from 'antd';

import Header from 'weather/layouts/header';
import Footer from 'weather/layouts/footer';
import Sidebar from 'weather/layouts/sidebar';

import './index.scss';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {};

const WeatherLayout: React.FC<Props> = ({ toggleSidebar, isCollapsed, children }) => (
  <Layout className="weather-layout">
    <Sidebar isCollapsed={isCollapsed} />
    <Layout>
      <Header toggleSidebar={toggleSidebar} />
      <Layout.Content className="weather-layout__content">
        {children}
      </Layout.Content>
      <Footer />
    </Layout>
  </Layout>
);

const mapStateToProps = (state: RootState) => ({
  isCollapsed: isCollapsedSidebarSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggleSidebar: () => dispatch(toggleSidebarAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherLayout);
