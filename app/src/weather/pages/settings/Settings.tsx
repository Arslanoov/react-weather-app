import React from 'react';
import { Switch, Select } from 'antd';

import { metrics } from 'const/metrics';

import { onMetricChange } from 'weather/api/settings';
import { getSetting } from 'storage/settings';

import WeatherLayout from 'weather/layouts/weather-layout';

import './index.scss';

const { Option } = Select;

const Settings = () => (
  <WeatherLayout>
    <div className="settings">
      <div className="settings__item">
        <h3 className="settings__title">Metric</h3>
        <Select onChange={onMetricChange} defaultValue={getSetting('metric')} style={{ width: 120 }}>
          {Object.keys(metrics).map((metric) => <Option key={metric} value={metrics[metric]}>{metric}</Option>)}
        </Select>
      </div>
      <div className="settings__item">
        <h3 className="settings__title">Night Mode</h3>
        <Switch />
      </div>
    </div>
  </WeatherLayout>
);

export default Settings;
