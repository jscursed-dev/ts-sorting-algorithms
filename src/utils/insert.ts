import { swap } from "./swap";

export const insert = <T>(array: T[], current: number, target: number): void => {
  for (let i: number = current; i > target; i--) {
    swap<T>(array, i, i - 1);
  }
};
