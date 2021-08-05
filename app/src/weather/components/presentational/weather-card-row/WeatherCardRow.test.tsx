import React from 'react';
import { screen, render } from '@testing-library/react';

import WeatherCardRow from 'weather/components/presentational/weather-card-row/WeatherCardRow';

test('renders weather card row', () => {
  render(<WeatherCardRow />);
  const linkElement = screen.getByText(/Test page/i);
  expect(linkElement).toBeInTheDocument();
});
