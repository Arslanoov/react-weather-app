import React from 'react';
import { render } from '@testing-library/react';

import { matchMedia } from 'tests/helpers/matchMedia';

import * as themeSwitcher from 'react-css-theme-switcher';

import forecast from 'tests/dummy/emptyForecast';

import ForecastCardList from './ForecastCardList';

describe('<ForecastCardList />', () => {
  it('renders correctly', () => {
    matchMedia();

    const useThemeSwitcherSpy = jest
      .spyOn(themeSwitcher, 'useThemeSwitcher')
      .mockReturnValue({
        theme: 'dark',
      } as unknown as ReturnType<typeof themeSwitcher.useThemeSwitcher>);

    const { container } = render(<ForecastCardList forecast={forecast} />);

    expect(useThemeSwitcherSpy).toBeCalled();

    const cardRows = container.querySelectorAll('.forecast-card-row');
    expect(cardRows.length).toBe(2);
  });
});
