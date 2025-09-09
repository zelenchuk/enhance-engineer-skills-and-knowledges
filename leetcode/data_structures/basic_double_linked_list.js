class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Добавить в начало
  addHead(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  // Добавить в конец
  addTail(value) {
    const node = new Node(value);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  // Удалить с начала
  removeHead() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return value;
  }

  // Удалить с конца
  removeTail() {
    if (!this.tail) return null;
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return value;
  }

  // Найти значение
  find(value) {
    let cur = this.head;
    while (cur) {
      if (cur.value === value) return cur;
      cur = cur.next;
    }
    return null;
  }

  // Для удобного вывода
  toArray() {
    const arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.value);
      cur = cur.next;
    }
    return arr;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}


const list = new DoublyLinkedList();

list.addHead(1);   // [1]   // Добавить в начало
list.addHead(2);   // [2, 1]   // Добавить в начало
list.addTail(5);   // [2, 1, 5]   // Добавить в конец

console.log(list.toArray()); // [2, 1, 5]

console.log(list.removeHead()); // 2
console.log(list.toArray());    // [1, 5]

console.log(list.removeTail()); // 5
console.log(list.toArray());    // [1]

console.log(list.find(1)); // Node { value: 1, prev: null, next: null }
