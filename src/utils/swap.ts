export const swap = <T>(
  array: T[],
  firstElementIndex: number,
  secondElementIndex: number
): void => {
  [array[firstElementIndex], array[secondElementIndex]] = [
    array[secondElementIndex],
    array[firstElementIndex],
  ];
};
