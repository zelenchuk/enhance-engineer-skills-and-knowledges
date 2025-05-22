class CustomArray {
  constructor() {
    this._length = 0;
    this._data = [];
  }

  increaceCounter() { this._length += 1; }
  decreaceCounter() { this._length -= 1; }

  get(index) {
    if (typeof index !== "number") throw new Error("Index value not correct");
    return this._data[index];
  }

  set(index, value) {
    if (typeof index !== "number" || index < 0)
      throw new Error("Index must be a non-negative number");

    this._data[index] = value;

    if (index >= this._length) {
      this._length = index + 1;
    }
  }

  append(value) {
    this._data[this._length] = value;
    this.increaceCounter();
  }

  insert(index, value) {
    if (typeof index !== "number" || index < 0)
      throw new Error("Invalid index");

    this._data[index] = value;
    if (index >= this._length) {
      this._length = index + 1;
    } else {
      this.increaceCounter();
    }
  }

  remove(index) {
    if (typeof index !== "number" || index < 0 || index >= this._length)
      throw new Error(`We can't remove index "${index}"`);

    this._data.splice(index, 1);
    this.decreaceCounter();
  }

  get length() { return this._length; }
  get data() { return this._data; }
}

module.exports = CustomArray;
