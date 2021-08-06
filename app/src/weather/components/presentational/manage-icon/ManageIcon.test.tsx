import React from 'react';
import { render } from '@testing-library/react';
import userEvent, { TargetElement } from '@testing-library/user-event';

import ManageIcon from './ManageIcon';

describe('<ManageIcon />', () => {
  test('correctly renders and successfully toggle', () => {
    const toggleSpy = jest.fn();
    const { container } = render(<ManageIcon onToggle={toggleSpy} className="test" />);

    const icon = container.firstChild;
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('manage-icon');
    expect(icon).toHaveClass('test');

    userEvent.click(icon as TargetElement);

    expect(toggleSpy).toBeCalled();
  });
});
