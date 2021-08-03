import React from 'react';

import { Layout } from 'antd';

import './index.scss';

const Footer = () => {
  const currentDate = new Date();

  return (
    <Layout.Footer className="footer">
      <div className="footer__app">
        Weather App ©
        {' '}
        {currentDate.getFullYear()}
      </div>
      <div className="footer__author">
        Created by Arslanoov
      </div>
    </Layout.Footer>
  );
};

export default Footer;
