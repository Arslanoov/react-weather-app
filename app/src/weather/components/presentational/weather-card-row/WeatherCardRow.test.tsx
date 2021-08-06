import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent, { TargetElement } from '@testing-library/user-event';

import weatherData from 'tests/dummy/weatherData';
import WeatherCardRow from './WeatherCardRow';

describe('<WeatherCardRow />', () => {
  it('renders correctly', () => {
    render(<WeatherCardRow data={weatherData} onDelete={() => {}} />);

    const cityName = screen.getByText(weatherData.name);
    expect(cityName).toBeInTheDocument();
  });

  test('deleting item', () => {
    const onDeleteSpy = jest.fn();
    const { container } = render(<WeatherCardRow data={weatherData} onDelete={onDeleteSpy} />);

    const close = container.querySelector('.weather-card-row__delete');

    userEvent.click(close as TargetElement);

    expect(onDeleteSpy).toBeCalled();
  });
});
