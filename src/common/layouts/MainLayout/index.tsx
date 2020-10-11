import * as React from 'react';

import Header from "../Header";
import Footer from '../Footer';

import './index.scss';

const MainLayout: React.FunctionComponent = ({ children }) => {
  return (
    <div className='container'>
      <Header />

      <div className="content">
        {children}
      </div>

      <Footer />
    </div>
  )
};

export default MainLayout;
