class CustomHashMap {
  constructor(size = 8) {
    this._buckets = new Array(size)
      .fill(null)
      .map(() => []);
  }

  _hash(key) {
    // Простой хеш (можно заменить позже)
    let hash = 0;
    for (let char of key.toString()) {
      hash += char.charCodeAt(0);
    }
    return hash % this._buckets.length;
  }

  set(key, value) {
    const index = this._hash(key);
    const bucket = this._buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }


  get(key) {
    // Твоя логика
  }

  has(key) {
    // Твоя логика
  }

  remove(key) {
    // Твоя логика
  }

}

const hashMap = new CustomHashMap();
console.log(hashMap);

hashMap.set("name", "Serhii");

console.log(hashMap);

module.exports = CustomHashMap;
