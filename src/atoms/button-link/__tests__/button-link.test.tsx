import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonLink } from '../../..';
import { ButtonLinkProps } from '..';

const TEXT = 'Check the source code';
const URL = 'https://github.com/taikai/taikai-design-system';

const makeSut = (action?: ButtonLinkProps['action']) =>
  render(<ButtonLink url={URL} value={TEXT} action={action} />);

describe('Button Link', () => {
  it('renders', () => {
    const { asFragment } = render(<ButtonLink url={URL} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    makeSut();
    screen.queryByText(TEXT);
  });

  it('has correct href', () => {
    makeSut();

    const anchorElem = screen.getByText(TEXT).closest('a');
    expect(anchorElem).toHaveProperty('href', URL);
  });

  it('has target _blank and noreferrer', () => {
    render(<ButtonLink url={URL} value={TEXT} blank />);

    const anchorElem = screen.getByText(TEXT).closest('a');
    expect(anchorElem).toHaveProperty('target', '_blank');
    expect(anchorElem).toHaveProperty('rel', 'noopener noreferrer');
  });

  it('has a custom relationship attribute', () => {
    render(<ButtonLink url={URL} value={TEXT} rel="nofollow" />);

    const anchorElem = screen.getByText(TEXT).closest('a');
    expect(anchorElem).not.toHaveProperty('target', '_blank');
    expect(anchorElem).toHaveProperty('rel', 'nofollow');

    // it does have a custom REL and a BLANK attribute
    render(<ButtonLink url={URL} value="example" rel="nofollow" blank />);
    const anchorElem2 = screen.getByText('example').closest('a');
    expect(anchorElem2).toHaveProperty('target', '_blank');
    expect(anchorElem2).toHaveProperty('rel', 'nofollow');
  });

  it('has empty target if not defined', () => {
    makeSut();

    const anchorElem = screen.getByText(TEXT).closest('a');
    expect(anchorElem).toHaveProperty('target', '');
  });

  it('calls action callback', async () => {
    const onClickAction = jest.fn();
    makeSut(onClickAction);

    const button = screen.getByRole('link', { name: TEXT });
    userEvent.click(button);
    expect(onClickAction).toBeCalledTimes(1);
  });
});
