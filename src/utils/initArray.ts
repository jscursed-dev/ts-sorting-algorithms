export const initArray = (length: number): number[] => {
  const arr: number[] = new Array(length);

  for (let i: number = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }

  return arr;
};
