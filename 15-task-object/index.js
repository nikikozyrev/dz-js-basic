"use strict";

const sortTypeId = "id";
const sortTypePriority = "priority";

const sortLowToHigh = true;
const sortHighToLow = false;

function getCounter() {
  let counter = 1;
  return function () {
    return ++counter;
  };
}
let idCount = getCounter();

const toDoList = {
  tasks: [{ title: "Помыть посуду", id: 1, priority: 1 }],
  addTask(title, priority) {
    if (!title || !priority) {
      console.log("Введите заголовок и приоритет!");
    } else {
      this.tasks.push({
        title,
        id: idCount(),
        priority,
      });
    }
  },
  findIndexTask(id) {
    return this.tasks.findIndex((el) => el.id === id);
  },
  deleteTask(id) {
    if (!this.findIndexTask(id)) {
      console.log(`Элемента с id=${id} не существует`);
      return;
    } else {
      this.tasks.splice(this.findIndexTask(id), 1);
    }
  },
  updateTask(id, title, priority) {
    if (!this.findIndexTask(id)) {
      console.log(`Элемента с id=${id} не существует`);
      return;
    } else if (!title || !priority) {
      console.log("Введите заголовок и приоритет!");
    } else {
      this.tasks[this.findIndexTask(id)].title = title;
      this.tasks[this.findIndexTask(id)].priority = priority;
    }
  },
  sortTasks(sortType, sortOrder) {
    if (sortType !== "id" && sortType !== "priority") {
      console.log("Не могу сортировать");
    } else {
      this.tasks.sort((a, b) =>
        sortOrder ? a[sortType] - b[sortType] : b[sortType] - a[sortType]
      );
    }
  },
};

console.log("Изначальный список: ", toDoList.tasks);

toDoList.addTask("Убраться", 10);
toDoList.addTask("Покушать", 3);
toDoList.addTask("Покататься", 5);
toDoList.addTask("Сделать домашку", 8);
console.log("Добавили 4 задачи: ", toDoList.tasks);

toDoList.deleteTask(3);
console.log("Удалили задачу с id = 3: ", toDoList.tasks);

toDoList.updateTask(4, "Тренировка", 7);
console.log("Обновили задачу с id = 4: ", toDoList.tasks);

toDoList.sortTasks(sortTypePriority, sortLowToHigh);
console.log("Сортировка по priority по возрастанию: ", toDoList.tasks);
toDoList.sortTasks(sortTypeId, sortHighToLow);
console.log("Сортировка по id по убыванию: ", toDoList.tasks);
toDoList.sortTasks(sortTypePriority, sortHighToLow);
console.log("Сортировка по priority по убыванию: ", toDoList.tasks);
toDoList.sortTasks(sortTypeId, sortLowToHigh);
console.log("Сортировка по id по возрастанию: ", toDoList.tasks);
