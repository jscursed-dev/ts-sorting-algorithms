const merge = (left: number[], right: number[]): number[] => {
  const output: number[] = [];
  let leftIndex: number = 0;
  let rightIndex: number = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftEl = left[leftIndex];
    const rightEl = right[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }

  return [...output, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

export const mergeSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
};
