import { GridItemVariants } from './GridItem';

interface IGridItem {
  [key: string]: string;
}

export const generateGridItemDisplay = (
  spans: GridItemVariants['spans']
): IGridItem =>
  typeof spans === 'object'
    ? Object.entries(spans).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value === 0 ? 'none' : 'unset',
        }),
        {}
      )
    : spans === 0
    ? 'none'
    : 'unset';

export const generateGridItemSpans = (cols = 12): IGridItem => {
  return [...Array(cols + 1)].reduce(
    (previous, _, i) => ({
      ...previous,
      [`${i}`]: `auto / span ${i}`,
    }),
    {}
  );
};
