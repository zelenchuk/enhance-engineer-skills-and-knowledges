
const CustomArray = require('./CustomArray');

describe('CustomArray', () => {
  let arr;

  beforeEach(() => {
    arr = new CustomArray();
  });

  test('append adds values and updates length', () => {
    arr.append(5);
    arr.append(10);
    expect(arr.length).toBe(2);
    expect(arr.data).toEqual([5, 10]);
  });

  test('insert at new index increases length', () => {
    arr.insert(2, 100);
    expect(arr.length).toBe(3);
    expect(arr.get(2)).toBe(100);
  });

  test('remove works and shifts values', () => {
    arr.append(1);
    arr.append(2);
    arr.append(3);
    arr.remove(1);
    expect(arr.length).toBe(2);
    expect(arr.data).toEqual([1, 3]);
  });

  test('set and get work correctly', () => {
    arr.append(10);
    arr.set(0, 20);
    expect(arr.get(0)).toBe(20);
  });

  test('remove throws on invalid index', () => {
    expect(() => arr.remove(0)).toThrow();
  });

  test('insert and remove 1000 times', () => {
    for (let i = 0; i < 1000; i++) {
      arr.append(i);
    }
    expect(arr.length).toBe(1000);
    expect(arr.get(999)).toBe(999);

    for (let i = 0; i < 500; i++) {
      arr.remove(0); // always remove from front
    }
    expect(arr.length).toBe(500);
    expect(arr.get(0)).toBe(500);
  });

  test('insert at large index sets correct length', () => {
    arr.insert(999, 'end');
    expect(arr.length).toBe(1000);
    expect(arr.get(999)).toBe('end');
    expect(arr.get(0)).toBe(undefined);
  });

  test('set beyond current length updates length correctly', () => {
    arr.set(50, 'hello');
    expect(arr.get(50)).toBe('hello');
    expect(arr.length).toBe(51); // should reflect index+1
  });

  test('remove from last index', () => {
    arr.append('a');
    arr.append('b');
    arr.append('c');
    arr.remove(2);
    expect(arr.length).toBe(2);
    expect(arr.data).toEqual(['a', 'b']);
  });

  test('massive insertions and access performance', () => {
    const count = 10_000;
    for (let i = 0; i < count; i++) {
      arr.append(i * 2);
    }

    expect(arr.length).toBe(count);
    expect(arr.get(9999)).toBe(19998);
    expect(arr.get(5000)).toBe(10000);
  });
});
