import { bubbleSort } from "./sorting-algorithms/bubbleSort";
import { insertionSort } from "./sorting-algorithms/insertionSort";
import { selectionSort } from "./sorting-algorithms/selectionSort";
import { mergeSort } from "./sorting-algorithms/mergeSort";
import { quickSort } from "./sorting-algorithms/quickSort";
import { initArray } from "./utils/initArray";
import { benchmark } from "./utils/benchmark";

interface BenchmarkResult {
  name: string;
  executionTime: number;
}

const benchmarkArrayLength: number = 100000;

const benchmarkResults: BenchmarkResult[] = [
  { name: "bubbleSort", executionTime: benchmark(benchmarkArrayLength, bubbleSort) },
  {
    name: "insertionSort",
    executionTime: benchmark(benchmarkArrayLength, insertionSort),
  },
  {
    name: "selectionSort",
    executionTime: benchmark(benchmarkArrayLength, selectionSort),
  },
  { name: "mergeSort", executionTime: benchmark(benchmarkArrayLength, mergeSort) },
  { name: "quickSort", executionTime: benchmark(benchmarkArrayLength, quickSort) },
];

console.log("\x1b[33mBenchmark results:\x1b[0m");
console.table(benchmarkResults);
