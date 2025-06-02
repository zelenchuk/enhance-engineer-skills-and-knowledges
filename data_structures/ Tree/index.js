
// Класс для представления узла дерева
class TreeNode {
  constructor(value) {
    this.value = value;      // Значение текущего узла
    this.children = [];      // Список дочерних узлов (потомков)
  }

  // Метод для добавления потомка
  addChild(childNode) {
    this.children.push(childNode);
  }

  // Рекурсивный обход дерева (глубина слева направо)
  traverse(depth = 0) {
    console.log(' '.repeat(depth * 2) + this.value); // Отступ для визуализации уровня
    this.children.forEach(child => child.traverse(depth + 1));
  }

  // Поиск узла по значению (возвращает первый найденный)
  find(value) {
    if (this.value === value) return this;

    for (const child of this.children) {
      const result = child.find(value);
      if (result) return result;
    }

    return null;
  }

  // Удаление узла (только среди прямых детей)
  removeChild(value) {
    this.children = this.children.filter(child => child.value !== value);
  }
}


// Создаём корень дерева
const root = new TreeNode("CEO");

// Добавляем дочерние узлы
const cto = new TreeNode("CTO");
const cfo = new TreeNode("CFO");
const coo = new TreeNode("COO");

root.addChild(cto);
root.addChild(cfo);
root.addChild(coo);

// Углубляем уровень
const devManager = new TreeNode("Dev Manager");
cto.addChild(devManager);

const engineer = new TreeNode("Software Engineer");
devManager.addChild(engineer);

// Обход дерева с отступами
console.log("🌳 Структура дерева:");
root.traverse();

// Поиск
const found = root.find("Software Engineer");
console.log("\n🔍 Найден узел:", found?.value);

// Удаление
cto.removeChild("Dev Manager");

console.log("\n🗑️ После удаления Dev Manager:");
root.traverse();
