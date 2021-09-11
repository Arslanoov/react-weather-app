import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { screen, render } from '@testing-library/react';
import userEvent, { TargetElement } from '@testing-library/user-event';

import * as themeSwitcher from 'react-css-theme-switcher';

import weatherData from 'tests/dummy/weatherData';
import WeatherCardRow from './WeatherCardRow';

describe('<WeatherCardRow />', () => {
  it('renders correctly', () => {
    const useThemeSwitcherSpy = jest
      .spyOn(themeSwitcher, 'useThemeSwitcher')
      .mockReturnValue({
        theme: 'dark',
      } as unknown as ReturnType<typeof themeSwitcher.useThemeSwitcher>);

    render(
      <Router>
        <WeatherCardRow data={weatherData} onDelete={() => {}} />
      </Router>,
    );

    expect(useThemeSwitcherSpy).toBeCalled();

    const cityName = screen.getByText(weatherData.name);
    expect(cityName).toBeInTheDocument();
  });

  test('deleting item', () => {
    const useThemeSwitcherSpy = jest
      .spyOn(themeSwitcher, 'useThemeSwitcher')
      .mockReturnValue({
        theme: 'dark',
      } as unknown as ReturnType<typeof themeSwitcher.useThemeSwitcher>);

    const onDeleteSpy = jest.fn();
    const { container } = render(
      <Router>
        <WeatherCardRow data={weatherData} onDelete={onDeleteSpy} />
      </Router>,
    );

    expect(useThemeSwitcherSpy).toBeCalled();

    const close = container.querySelector('.weather-card-row__delete');

    userEvent.click(close as TargetElement);

    expect(onDeleteSpy).toBeCalled();
  });
});
