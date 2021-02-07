import styled from 'styled-components';

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: var(--bold, 700);
  color: var(--grey, hsl(0, 0%, 85%));
  text-transform: uppercase;

  svg {
    width: auto;
    height: 15px;
  }
`;
