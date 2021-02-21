import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Checkbox } from '../../..';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {
  it('renders', () => {
    const { asFragment } = render(
      <Checkbox value={'check'} label={'hello'} checked={true} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('is checked', () => {
    render(<Checkbox value={'check'} label={'hello'} checked={true} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('is not checked', () => {
    render(<Checkbox value={'check'} label={'hello'} checked={false} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('is not checked by default', () => {
    render(<Checkbox value={'check'} label={'hello'} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('is changes to checked when clicked', () => {
    const onChangeMock = jest.fn();
    render(
      <Checkbox value={'check'} label={'hello'} onChange={onChangeMock} />
    );
    const checkboxElem = screen.getByRole('checkbox');
    userEvent.click(checkboxElem);
    expect(onChangeMock).toBeCalledTimes(1);
    expect(checkboxElem).toBeChecked();
  });
});
