import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render } from '@testing-library/react';
import userEvent, { TargetElement } from '@testing-library/user-event';

import * as themeSwitcher from 'react-css-theme-switcher';

import weatherData from 'tests/dummy/weatherData';
import WeatherCardList from './WeatherCardList';

describe('<WeatherCardList />', () => {
  it('renders correctly', () => {
    const useThemeSwitcherSpy = jest
      .spyOn(themeSwitcher, 'useThemeSwitcher')
      .mockReturnValue({
        theme: 'dark',
        currentTheme: 'dark',
      } as unknown as ReturnType<typeof themeSwitcher.useThemeSwitcher>);

    const onDelete = jest.fn();

    const { container } = render(
      <Router>
        <WeatherCardList
          items={[
            weatherData,
            {
              ...weatherData,
              id: 5368362,
            },
          ]}
          onItemDelete={onDelete}
        />
      </Router>,
    );

    expect(useThemeSwitcherSpy).toBeCalled();

    const list = container.querySelector('.weather-card-list');
    expect(list).toBeInTheDocument();

    const items = container.querySelectorAll('.weather-card-list__item');
    expect(items.length).toBe(2);
  });

  it('deletes items', () => {
    const useThemeSwitcherSpy = jest
      .spyOn(themeSwitcher, 'useThemeSwitcher')
      .mockReturnValue({
        theme: 'dark',
        currentTheme: 'dark',
      } as unknown as ReturnType<typeof themeSwitcher.useThemeSwitcher>);

    const onDelete = jest.fn();

    const { container } = render(<Router><WeatherCardList items={[weatherData]} onItemDelete={onDelete} /></Router>);

    expect(useThemeSwitcherSpy).toBeCalled();

    const deleteIcon = container.querySelector('.weather-card-row__delete');
    userEvent.click(deleteIcon as TargetElement);

    expect(onDelete).toBeCalled();
  });
});
