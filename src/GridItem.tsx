import React from 'react';
import { Box, BoxProps } from './Box';
import { generateGridItemDisplay } from './gridHelpers';

export const GridItem = ({
  spans = { initial: '2', md: '12' },
  children,
  ...restProps
}: Omit<BoxProps, 'span'>): JSX.Element => {
  return (
    <Box spans={spans} display={generateGridItemDisplay(spans)} {...restProps}>
      {children}
    </Box>
  );
};

export type GridItemVariants = React.ComponentProps<typeof GridItem>;
