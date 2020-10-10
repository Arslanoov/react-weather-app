import * as React from 'react';

import { Link } from "react-router-dom";

const MainLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <header className='header'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/404">404</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className='main'>
        {children}
      </main>

      <footer className='footer'>
        <hr/>
        <p>Footer</p>
        <p>All right reserved</p>
      </footer>
    </>
  )
};

export default MainLayout;
