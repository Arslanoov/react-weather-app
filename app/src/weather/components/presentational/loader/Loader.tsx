import React from 'react';

import { Spin } from 'antd';

import './index.scss';

const Loader = () => (
  <div className="loader">
    <Spin />
  </div>
);

export default Loader;
