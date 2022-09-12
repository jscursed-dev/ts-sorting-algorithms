import { insert } from "../utils/insert";

export const insertionSort = (array: number[]): number[] => {
  for (let i: number = 1; i < array.length; i++) {
    let key: number = i;
    for (let j: number = i; j >= 0; j--) {
      if (array[i] < array[j]) {
        key = j;
      }
    }

    insert<number>(array, i, key);
  }
  return array;
};
