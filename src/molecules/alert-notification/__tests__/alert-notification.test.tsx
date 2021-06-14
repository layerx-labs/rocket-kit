import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { AlertNotification } from '../../..';

describe('AlertNotification', () => {
  it('renders', () => {
    const { asFragment } = render(
      <AlertNotification
        className="open"
        value="this is my notification text"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const textValue = 'this is my notification text';
    render(<AlertNotification className="open" value={textValue} />);
    screen.queryByText(textValue);
  });
});
