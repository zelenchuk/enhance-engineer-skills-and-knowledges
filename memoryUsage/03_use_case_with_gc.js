// run via ---> "node --expose-gc 02_use_case.js"
const arr = new Array(6120).fill(1);

const logMemory = (label, mem) => {
  console.log(`[${label}] heapUsed: ${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  console.log(`[${label}] heapTotal: ${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`[${label}] rss: ${(mem.rss / 1024 / 1024).toFixed(2)} MB`);
};

const measure = (fn, label = 'Function') => {
  global.gc();
  const before = process.memoryUsage();
  logMemory(`${label} BEFORE`, before);

  fn();

  global.gc();
  const after = process.memoryUsage();
  logMemory(`${label} AFTER`, after);

  const used = ((after.heapUsed - before.heapUsed) / 1024 / 1024).toFixed(2);
  console.log(`[${label}] Used heap: ${used} MB`);
};


// Медленный — создаёт копии массива на каждом шаге
const getLengthSlice = (arr) => {
  if (arr[0] === undefined) return 0;
  return 1 + getLengthSlice(arr.slice(1));
};

// Быстрый — использует индекс без копий
const getLengthIndex = (arr, i = 0) => {
  if (arr[i] === undefined) return 0;
  return 1 + getLengthIndex(arr, i + 1);
};

// 🔍 Измеряем обе версии
measure(() => getLengthSlice(arr), 'Slice recursion');
measure(() => getLengthIndex(arr), 'Index recursion');
