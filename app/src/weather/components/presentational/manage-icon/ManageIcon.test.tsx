import React from 'react';
import { render } from '@testing-library/react';
import userEvent, { TargetElement } from '@testing-library/user-event';

import ManageIcon from './ManageIcon';

describe('<ManageIcon />', () => {
  it('renders correctly', () => {
    const { container } = render(<ManageIcon onToggle={() => {}} className="test" />);

    const icon = container.firstChild;
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('manage-icon');
    expect(icon).toHaveClass('test');
  });

  test('toggle', () => {
    const toggleSpy = jest.fn();
    const { container } = render(<ManageIcon onToggle={toggleSpy} className="test" />);

    const icon = container.firstChild;

    userEvent.click(icon as TargetElement);

    expect(toggleSpy).toBeCalled();
  });
});
