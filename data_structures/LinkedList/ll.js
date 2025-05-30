class SlowInsertList {
  constructor() {
    this.items = [];
  }

  prepend(item) {
    this.items.unshift(item); // ❌ O(n) — каждый элемент сдвигается
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class FastLinkedList {
  constructor() {
    this.head = null;
  }

  prepend(item) {
    const newNode = new Node(item);
    newNode.next = this.head; // 🔗 Новый элемент указывает на текущий head
    this.head = newNode;      // 🧠 Новый head — это наш элемент
  }
}


function benchmark(listClass, label) {
  const list = new listClass();
  const count = 100_000;

  const start = Date.now();

  for (let i = 0; i < count; i++) {
    list.prepend(`item_${i}`);
  }

  const end = Date.now();
  console.log(`${label}: ${end - start}ms`);
}


console.log("🚀 Бенчмарк вставки в начало на 100,000 элементов:");
benchmark(SlowInsertList, "❌ Массив с unshift()");
benchmark(FastLinkedList, "✅ Linked List с указателем head");
