import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonLink } from '../../..';
import userEvent from '@testing-library/user-event';

describe('Button Link', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ButtonLink url="https://github.com/taikai/taikai-design-system" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const buttonText = 'Check the source code';
    render(
      <ButtonLink
        url="https://github.com/taikai/taikai-design-system"
        value={buttonText}
      />
    );
    screen.queryByText(buttonText);
  });

  it('has correct href', () => {
    const buttonText = 'Check the source code';
    const buttonUrl = 'https://github.com/taikai/taikai-design-system';
    render(<ButtonLink url={buttonUrl} value={buttonText} />);
    const anchorElem = screen.getByText(buttonText).closest('a');
    expect(anchorElem).toHaveProperty('href', buttonUrl);
  });

  it('has target _blank and noreferrer', () => {
    const buttonText = 'Check the source code';
    const buttonUrl = 'https://github.com/taikai/taikai-design-system';
    render(<ButtonLink url={buttonUrl} value={buttonText} blank />);
    const anchorElem = screen.getByText(buttonText).closest('a');
    expect(anchorElem).toHaveProperty('target', '_blank');
    expect(anchorElem).toHaveProperty('rel', 'noopener noreferrer');
  });

  it('has empty target if not defined', () => {
    const buttonText = 'Check the source code';
    const buttonUrl = 'https://github.com/taikai/taikai-design-system';
    render(<ButtonLink url={buttonUrl} value={buttonText} />);
    const anchorElem = screen.getByText(buttonText).closest('a');
    expect(anchorElem).toHaveProperty('target', '');
  });

  it('calls action callback', async () => {
    const onClickAction = jest.fn();
    const buttonText = 'Check the source code';
    const buttonUrl = 'https://github.com/taikai/taikai-design-system';
    render(
      <ButtonLink url={buttonUrl} value={buttonText} action={onClickAction} />
    );
    const button = await screen.findByText(buttonText);
    userEvent.click(button);
    expect(onClickAction).toBeCalledTimes(1);
  });
});
