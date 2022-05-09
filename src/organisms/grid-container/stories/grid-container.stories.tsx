import React from 'react';
import GridContainer from '..';
import GridRow from '../grid-row';
import GridCol from '../grid-col';

export default {
  title: 'Design System/Organisms/Grid Container',
  component: GridContainer,
};

export const GridContainerComponent = () => {
  return (
    <GridContainer>
      <GridRow>
        <GridCol>Col 1</GridCol>
        <GridCol>Col 2</GridCol>
        <GridCol size={2}>Col 3</GridCol>
      </GridRow>
      <GridRow>
        <GridCol>Col 1</GridCol>
        <GridCol>Col 2</GridCol>
      </GridRow>
    </GridContainer>
  );
};

GridContainerComponent.storyName = 'Grid Container';
