const measureMaxCallStack = (depth = 0) => {
  try {
    return measureMaxCallStack(depth + 1);
  } catch (e) {
    return depth;
  }
};

console.log("Максимальная глубина стека:", measureMaxCallStack());
