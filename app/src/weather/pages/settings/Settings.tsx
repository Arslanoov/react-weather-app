import React from 'react';
import { Switch, Select } from 'antd';

import { useThemeSwitcher } from 'react-css-theme-switcher';

import { metrics } from 'const/metrics';

import { onMetricChange } from 'weather/api/settings';
import { getSetting, changeNightModeSetting } from 'storage/settings';

import WeatherLayout from 'weather/layouts/weather-layout';

import './index.scss';

const { Option } = Select;

const Settings = () => {
  const {
    switcher,
    themes,
    currentTheme,
  } = useThemeSwitcher();

  const toggleTheme = (isChecked: boolean) => {
    switcher({ theme: isChecked ? themes.dark : themes.light });
    changeNightModeSetting(isChecked ? 'dark' : 'light');
  };

  return (
    <WeatherLayout>
      <div className="settings">
        <div className="settings__item">
          <h3 className="settings__title">Metric</h3>
          <Select
            className="settings__select"
            onChange={onMetricChange}
            defaultValue={getSetting('metric')}
          >
            {Object.keys(metrics).map(
              (metric) => <Option key={metric} value={metrics[metric]}>{metric}</Option>,
            )}
          </Select>
        </div>
        <div className="settings__item">
          <h3 className="settings__title">Night Mode</h3>
          <Switch checked={currentTheme === 'dark'} onChange={toggleTheme} />
        </div>
      </div>
    </WeatherLayout>
  );
};

export default Settings;
