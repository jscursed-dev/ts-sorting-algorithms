import { swap } from "../utils/swap";

export const bubbleSort = (array: number[]): number[] => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap<number>(array, j, j + 1);
      }
    }
  }

  return array;
};
