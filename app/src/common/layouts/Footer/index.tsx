import * as React from 'react';

import './index.scss';

const Footer: React.FC = () => {
  const currentYear = (new Date()).getUTCFullYear();

  return (
    <footer className="footer text-center">
      All right reserved &copy;
      {' '}
      {currentYear}
    </footer>
  );
};

export default Footer;
