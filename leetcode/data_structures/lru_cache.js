class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addHead(node) {
    node.prev = null;
    node.next = this.head;
    if (this.head) this.head.prev = node;
    this.head = node;
    if (!this.tail) this.tail = node;
    this.size++;
  }
  removeNode(node) {
    if (!node) return;
    if (node.prev) node.prev.next = node.next; else this.head = node.next;
    if (node.next) node.next.prev = node.prev; else this.tail = node.prev;
    node.prev = node.next = null;
    this.size--;
  }
  moveToHead(node) {
    if (this.head === node) return;
    this.removeNode(node);
    this.addHead(node);
  }
  removeTail() {
    const node = this.tail;
    if (node) this.removeNode(node);
    return node; // может быть null
  }
}

class LRUCache {
  constructor(capacity) {
    if (capacity <= 0) throw new Error('capacity must be > 0');
    this.capacity = capacity;
    this.map = new Map();          // key -> Node
    this.list = new DoublyLinkedList();
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) return -1;          // или null/undefined — по вкусу
    this.list.moveToHead(node);    // стал самым недавно использованным
    return node.value;
  }

  put(key, value) {
    const exist = this.map.get(key);
    if (exist) {
      exist.value = value;         // обновили
      this.list.moveToHead(exist); // и подняли в head
      return;
    }
    // новый ключ
    const node = new Node(key, value);
    this.list.addHead(node);
    this.map.set(key, node);

    if (this.list.size > this.capacity) {
      const lru = this.list.removeTail();   // удалили самый старый
      if (lru) this.map.delete(lru.key);    // убрать из Map
    }
  }
}

const cache = new LRUCache(2);
cache.put('a', 1); // [a]
cache.put('b', 2); // [b, a]
cache.get('a');    // -> 1, порядок: [a, b]
cache.put('c', 3); // capacity=2, вылетит 'b' (хвост), порядок: [c, a]
cache.get('b');    // -> -1 (нет)
cache.get('a');    // -> 1
