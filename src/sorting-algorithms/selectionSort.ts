import { insert } from "../utils/insert";

export const selectionSort = (array: number[]): number[] => {
  let min: number;

  for (let i: number = 0; i < array.length; i++) {
    min = i;

    for (let j: number = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    insert<number>(array, min, i);
  }

  return array;
};
