import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TruncateLine from '..';

describe('Truncate Line', () => {
  it('renders', () => {
    const { asFragment } = render(
      <TruncateLine value="this is my huge text" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has correct value', () => {
    const textValue =
      'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero De Finibus Bonorum et Malorum for use in a type specimen book.';
    const testId: string = 'truncate-test';
    render(<TruncateLine value={textValue} dataTestId={testId} />);
    expect(screen.getByText(textValue)).toBeInTheDocument();
  });
});
