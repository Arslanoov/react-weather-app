import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent, { TargetElement } from '@testing-library/user-event';

import weatherData from 'tests/dummy/weatherData';
import WeatherCardRow from './WeatherCardRow';

describe('<WeatherCardRow />', () => {
  test('renders correctly with props', () => {
    const onDeleteSpy = jest.fn();
    const { container } = render(<WeatherCardRow data={weatherData} onDelete={onDeleteSpy} />);

    const cityName = screen.getByText(weatherData.name);
    expect(cityName).toBeInTheDocument();

    const close = container.querySelector('.weather-card-row__delete');

    userEvent.click(close as TargetElement);

    expect(onDeleteSpy).toBeCalled();
  });
});
