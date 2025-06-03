// Узел бинарного дерева
class BinaryTreeNode {
  constructor(value) {
    this.value = value;     // Значение узла
    this.left = null;       // Левый потомок
    this.right = null;      // Правый потомок
  }

  // Вставка значения по правилам Binary Search Tree (BST)
  insert(newValue) {
    if (newValue < this.value) {
      if (this.left) {
        this.left.insert(newValue);
      } else {
        this.left = new BinaryTreeNode(newValue);
      }
    } else {
      if (this.right) {
        this.right.insert(newValue);
      } else {
        this.right = new BinaryTreeNode(newValue);
      }
    }
  }

  // Обход дерева in-order (лево → корень → право) — даёт отсортированный список
  inOrder() {
    const result = [];
    if (this.left) result.push(...this.left.inOrder());
    result.push(this.value);
    if (this.right) result.push(...this.right.inOrder());
    return result;
  }

  // Поиск значения
  contains(target) {
    if (this.value === target) return true;
    if (target < this.value) {
      return this.left?.contains(target) || false;
    } else {
      return this.right?.contains(target) || false;
    }
  }
}


const tree = new BinaryTreeNode(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log("🌿 In-order (sorted):", tree.inOrder());
// ➜ [3, 5, 7, 10, 12, 15, 18]

console.log("🔍 Contains 7:", tree.contains(7)); // true
console.log("🔍 Contains 20:", tree.contains(20)); // false
