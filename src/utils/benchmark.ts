import { initArray } from "./initArray";

type sortingFunction = (array: number[]) => number[];

export const benchmark = (length: number, sortingFunction: sortingFunction): number => {
  const array: number[] = initArray(10000);

  const startPoint: number = performance.now();
  sortingFunction(array);
  const endPoint: number = performance.now();

  const executionTime: number = Math.floor(1000 * (endPoint - startPoint)) / 1000;
  return executionTime;
};
