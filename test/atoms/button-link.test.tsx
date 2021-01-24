import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonLink } from '../../src';

describe('Button Link', () => {
  it('renders', () => {
    const { asFragment } = render(
      <ButtonLink url="https://github.com/taikai/taikai-design-system" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Button has correct value', async () => {
    const buttonText = 'Check the source code';
    render(
      <ButtonLink
        url="https://github.com/taikai/taikai-design-system"
        value={buttonText}
      />
    );
    const foundText = await screen.getByText(buttonText);
    expect(foundText).toBeTruthy();
  });

  it('Button has correct href', async () => {
    const buttonText = 'Check the source code';
    const buttonUrl = 'https://github.com/taikai/taikai-design-system';
    render(<ButtonLink url={buttonUrl} value={buttonText} />);
    const anchorElem = await screen.getByText(buttonText).closest('a');
    expect(anchorElem).toHaveProperty('href', buttonUrl);
  });

  it('Button has target _blank and noreferrer', async () => {
    const buttonText = 'Check the source code';
    const buttonUrl = 'https://github.com/taikai/taikai-design-system';
    render(<ButtonLink url={buttonUrl} value={buttonText} blank />);
    const anchorElem = await screen.getByText(buttonText).closest('a');
    expect(anchorElem).toHaveProperty('target', '_blank');
    expect(anchorElem).toHaveProperty('rel', 'noopener noreferrer');
  });

  it('Button has empty targe if not defined', async () => {
    const buttonText = 'Check the source code';
    const buttonUrl = 'https://github.com/taikai/taikai-design-system';
    render(<ButtonLink url={buttonUrl} value={buttonText} />);
    const anchorElem = await screen.getByText(buttonText).closest('a');
    expect(anchorElem).toHaveProperty('target', '');
  });
});
