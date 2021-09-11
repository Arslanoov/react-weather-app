import React from 'react';
import { connect } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import { isCollapsedSidebarSelector, toggleSidebar as toggleSidebarAction } from 'store/slices/sidebar';

import { Layout } from 'antd';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useThemeSwitcher } from 'react-css-theme-switcher';

import Header from 'weather/layouts/header';
import Footer from 'weather/layouts/footer';
import Sidebar from 'weather/layouts/sidebar';

import './index.scss';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {};

const WeatherLayout: React.FC<Props> = ({
  toggleSidebar,
  isSidebarCollapsed,
  children,
}) => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <Layout className="weather-layout">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <Layout>
        <Header
          className="weather-layout__header"
          toggleSidebar={toggleSidebar}
        />
        <Layout.Content
          className={`weather-layout__content ${isSidebarCollapsed ? '' : 'weather-layout__content_collapsed'}`}
        >
          {children}
        </Layout.Content>
        <Footer className={`weather-layout__footer ${isSidebarCollapsed ? '' : 'weather-layout__footer_collapsed'}`} />
      </Layout>
      <ToastContainer
        theme={currentTheme === 'light' ? 'light' : 'dark'}
        autoClose={4000}
        limit={1}
        closeOnClick
        newestOnTop
      />
    </Layout>
  );
};

const mapStateToProps = (state: RootState) => ({
  isSidebarCollapsed: isCollapsedSidebarSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  toggleSidebar: () => dispatch(toggleSidebarAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherLayout);
