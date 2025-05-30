const benchmark = (someJob, label = undefined) => {
  const start = Date.now();
  const result = someJob();
  const end = Date.now();
  const duration = end - start;

  const seconds = Math.floor(duration / 1000);
  const leftOverMilliseconds = duration % 1000;
  const minutes = Math.floor(seconds / 60);

  const labelPrefix = label ? `[${label}] ` : '';
  
  console.log(`${labelPrefix}⏱ Done in ${duration} ms`);
  console.log(`${labelPrefix}⏱ Done in ${seconds} s  ${leftOverMilliseconds} ms`);
  console.log(`${labelPrefix}⏱ Done in ${minutes} m  ${seconds} s ${leftOverMilliseconds} ms`);

  return { result, duration };
};


const sum = () => {
  let total = 0;
  for (let i = 0; i < 1_000_000; i++) {
      total += total;
  }
  return total;
}

const {result:r} = benchmark(sum, 'sum()')
console.log(r);
