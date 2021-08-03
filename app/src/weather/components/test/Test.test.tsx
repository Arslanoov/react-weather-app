import React from 'react';
import { render, screen } from '@testing-library/react';

import Test from './index';

test('renders test component', () => {
  render(<Test />);
  const linkElement = screen.getByText(/Test page/i);
  expect(linkElement).toBeInTheDocument();
});
