import React from 'react';
import { render } from '@testing-library/react';

import { mapWeatherIcon } from 'helpers/mapper/weatherIconMapper';

import WeatherIcon from './WeatherIcon';

describe('<WeatherIcon />', () => {
  it('renders correctly', () => {
    const icon = '01d';
    const additionalClass = 'additional classes';
    const { container } = render(<WeatherIcon className={additionalClass} icon={icon} />);

    const mappedIcon = mapWeatherIcon(icon);
    const wrapperItem = container.querySelector('.weather-icon');
    const iconItem = container.querySelector('.weather-icon__item');

    expect(wrapperItem).toHaveClass(additionalClass);
    expect(iconItem).toHaveAttribute('src', mappedIcon);
  });
});
