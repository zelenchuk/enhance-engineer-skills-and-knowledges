class CustomArray {
  constructor() {
    this._length = 0;
    this._data = [];
  }

  increaceCounter() {
    this._length += 1;
  }

  decreaceCounter() {
    this._length -= 1;
  }

  get(index) {
    if (typeof index !== "number") throw new Error("Index value not correct. Make sure you sent integer here");
    return this._data[index]
  }

  set(index, value) {
    if (typeof index !== "number") throw new Error("Index value not correct. Make sure you sent integer here");
    this._data[index] = value;
  }

  append(value) {
    this._data[this._length] = value;
    this.increaceCounter();
  }

  insert(index, value) {
    if (typeof index !== "number" || index < 0)
      throw new Error("Invalid index. Must be non-negative integer");

    this._data[index] = value;
    if (index >= this._length) {
      this._length = index + 1;
    } else {
      this.increaceCounter();
    }
  }

  remove(index) {
    if (typeof index !== "number" || index < 0 || index >= this._length) {
      throw new Error(`We can't remove index "${index}". It is out of bounds. Current length: ${this._length}`);
    }

    this._data.splice(index, 1);
    this.decreaceCounter();
  }

  get length () {
    return this._length;
  }

  get data() {
    return this._data;
  }
}

const a = new CustomArray();

a.append(12);
a.append(10);
a.append(1);

console.log(a.length)
console.log(a.data)

a.remove(2);
a.remove(0);
a.remove(0);

console.log(a.length)
console.log(a.data)


a.insert(0, 1);
a.insert(1, 2);
a.insert(2, 3);
a.insert(3, 4);
a.insert(6, 5);


console.log(a.length)
console.log(a.data)

a.remove(0);

console.log(a.length)
console.log(a.data)

a.set(3, 15)
console.log(a.get(3))

