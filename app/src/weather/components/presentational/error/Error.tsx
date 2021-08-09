import React from 'react';

import './index.scss';

type Props = {
  message: string | null;
};

const Error: React.FC<Props> = ({ message = '' }) => (
  <div className="error">
    {message}
  </div>
);

export default Error;
