
const CustomHashMap = require('./CustomHashMap');

describe('CustomHashMap', () => {
  let map;

  beforeEach(() => {
    map = new CustomHashMap();
  });

  test('sets and gets a single key-value pair', () => {
    map.set('key1', 'value1');
    expect(map.get('key1')).toBe('value1');
  });

  test('returns undefined for missing key', () => {
    expect(map.get('not-exist')).toBe(undefined);
  });

  test('overwrites value for the same key', () => {
    map.set('key1', 'initial');
    map.set('key1', 'updated');
    expect(map.get('key1')).toBe('updated');
  });

  test('stores and retrieves multiple keys', () => {
    map.set('a', 1);
    map.set('b', 2);
    map.set('c', 3);
    expect(map.get('a')).toBe(1);
    expect(map.get('b')).toBe(2);
    expect(map.get('c')).toBe(3);
  });

  test('supports numeric and object keys', () => {
    const objKey = { name: 'objectKey' };
    map.set(42, 'answer');
    map.set(objKey, 'custom');

    expect(map.get(42)).toBe('answer');
    expect(map.get(objKey)).toBe('custom');
  });

  test('deletes keys properly', () => {
    map.set('delete-me', 'bye');
    expect(map.get('delete-me')).toBe('bye');
    map.remove('delete-me');
    expect(map.get('delete-me')).toBe(undefined);
  });

  test('has() returns true for existing keys and false for missing ones', () => {
    map.set('exists', 'yes');
    expect(map.has('exists')).toBe(true);
    expect(map.has('missing')).toBe(false);
  });

  test('handles many entries efficiently', () => {
    for (let i = 0; i < 10000; i++) {
      map.set(`key-${i}`, i);
    }
    expect(map.get('key-0')).toBe(0);
    expect(map.get('key-9999')).toBe(9999);
    expect(map.has('key-5000')).toBe(true);
  });

  test('works after deleting and re-adding the same key', () => {
    map.set('recycle', 'once');
    map.remove('recycle');
    map.set('recycle', 'twice');
    expect(map.get('recycle')).toBe('twice');
  });

  test('handles keys with similar content (collision check)', () => {
    map.set('abc', 123);
    map.set('acb', 321); // force same hash if naive
    expect(map.get('abc')).toBe(123);
    expect(map.get('acb')).toBe(321);
  });
});
