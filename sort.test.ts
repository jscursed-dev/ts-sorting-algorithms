import { bubbleSort } from "./src/sorting-algorithms/bubbleSort";
import { insertionSort } from "./src/sorting-algorithms/insertionSort";
import { selectionSort } from "./src/sorting-algorithms/selectionSort";
import { mergeSort } from "./src/sorting-algorithms/mergeSort";
import { quickSort } from "./src/sorting-algorithms/quickSort";

test("Regular array of pair length", () => {
  expect(bubbleSort([3, 4, 5, 1])).toEqual([1, 3, 4, 5]);
  expect(selectionSort([3, 4, 5, 1])).toEqual([1, 3, 4, 5]);
  expect(insertionSort([3, 4, 5, 1])).toEqual([1, 3, 4, 5]);
  expect(mergeSort([3, 4, 5, 1])).toEqual([1, 3, 4, 5]);
  expect(quickSort([3, 4, 5, 1])).toEqual([1, 3, 4, 5]);
});

test("Regular array of even length", () => {
  expect(bubbleSort([3, 5, 1])).toEqual([1, 3, 5]);
  expect(selectionSort([3, 5, 1])).toEqual([1, 3, 5]);
  expect(insertionSort([3, 5, 1])).toEqual([1, 3, 5]);
  expect(mergeSort([3, 5, 1])).toEqual([1, 3, 5]);
  expect(quickSort([3, 5, 1])).toEqual([1, 3, 5]);
});

test("Array with dublicates", () => {
  expect(bubbleSort([3, 5, 1, 2, 2])).toEqual([1, 2, 2, 3, 5]);
  expect(selectionSort([3, 5, 1, 2, 2])).toEqual([1, 2, 2, 3, 5]);
  expect(insertionSort([3, 5, 1, 2, 2])).toEqual([1, 2, 2, 3, 5]);
  expect(mergeSort([3, 5, 1, 2, 2])).toEqual([1, 2, 2, 3, 5]);
  expect(quickSort([3, 5, 1, 2, 2])).toEqual([1, 2, 2, 3, 5]);
});

test("Edge keys: all elements are dublicates", () => {
  expect(bubbleSort([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2, 2]);
  expect(selectionSort([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2, 2]);
  expect(insertionSort([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2, 2]);
  expect(mergeSort([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2, 2]);
  expect(quickSort([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2, 2]);
});

test("Edge keys: 1 element array", () => {
  expect(bubbleSort([1])).toEqual([1]);
  expect(selectionSort([1])).toEqual([1]);
  expect(insertionSort([1])).toEqual([1]);
  expect(mergeSort([1])).toEqual([1]);
  expect(quickSort([1])).toEqual([1]);
});
