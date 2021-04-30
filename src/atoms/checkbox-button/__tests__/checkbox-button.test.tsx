import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { CheckboxButton } from '../../..';

describe('CheckboxButton', () => {
  it('renders', () => {
    const { asFragment } = render(
      <CheckboxButton value={'check'} label={'hello'} checked={true} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('is checked', () => {
    render(<CheckboxButton value={'check'} label={'hello'} checked={true} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('is not checked', () => {
    render(<CheckboxButton value={'check'} label={'hello'} checked={false} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('is not checked by default', () => {
    render(<CheckboxButton value={'check'} label={'hello'} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('is changes to checked when clicked', () => {
    const onChangeMock = jest.fn();
    render(
      <CheckboxButton value={'check'} label={'hello'} onChange={onChangeMock} />
    );
    const checkboxElem = screen.getByRole('checkbox');
    userEvent.click(checkboxElem);
    expect(onChangeMock).toBeCalledTimes(1);
    expect(checkboxElem).toBeChecked();
  });
});
