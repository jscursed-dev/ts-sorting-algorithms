const merge = (pivot: number, left: number[], right: number[]) => {
  return [...left, pivot, ...right];
};

//by median of three method
const findPivot = (array: number[]): number => {
  const middleIndex: number = Math.floor(array.length / 2);

  const firstEl: number = array[0];
  const lastEl: number = array[array.length - 1];
  const middleEl: number = array[middleIndex];

  if (firstEl > middleEl && middleEl >= lastEl) {
    return 0;
  } else if (firstEl > lastEl && lastEl >= middleEl) {
    return middleIndex;
  } else {
    return array.length - 1;
  }
};

export const quickSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = findPivot(array);
  const pivot: number = array[pivotIndex];

  const left: number[] = [];
  const right: number[] = [];

  array.splice(pivotIndex, 1);

  for (let i = 0; i < array.length; i++) {
    if (pivot > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return merge(pivot, quickSort(left), quickSort(right));
};
