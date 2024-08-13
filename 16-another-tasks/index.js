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

//

const newToDoList = {
  tasks: [
    {
      title: "Помыть посуду",
      description: "Очень тщательно помыть!",
      id: 1,
      priority: 1,
    },
  ],
  addTask(title, description, priority) {
    if (!title || !priority || !description) {
      console.log("Введите заголовок, описание и приоритет!");
    } else {
      this.tasks.push({
        title,
        description,
        id: idCount(),
        priority,
      });
    }
  },
  updateTask(id, title, description, priority) {
    if (!this.findIndexTask(id)) {
      console.log(`Элемента с id=${id} не существует`);
      return;
    } else if (!title || !priority || !description) {
      console.log("Введите заголовок, описание и приоритет!");
    } else {
      this.tasks[this.findIndexTask(id)].title = title;
      this.tasks[this.findIndexTask(id)].priority = priority;
      this.tasks[this.findIndexTask(id)].description = description;
    }
  },
};

newToDoList.findIndexTask = toDoList.findIndexTask.bind(newToDoList);
newToDoList.deleteTask = toDoList.deleteTask.bind(newToDoList);
newToDoList.sortTasks = toDoList.sortTasks.bind(newToDoList);

console.log("Изначальный список: ", newToDoList.tasks);

newToDoList.addTask("Убраться", "Описание", 10);
newToDoList.addTask("Покушать", "Описание", 3);
newToDoList.addTask("Покататься", "Описание", 5);
newToDoList.addTask("Сделать домашку", "Описание", 8);
console.log("Добавили 4 задачи: ", newToDoList.tasks);

newToDoList.deleteTask(3);
console.log("Удалили задачу с id = 3: ", newToDoList.tasks);

newToDoList.updateTask(4, "Тренировка", "Описание", 7);
console.log("Обновили задачу с id = 4: ", newToDoList.tasks);

newToDoList.sortTasks(sortTypePriority, sortLowToHigh);
console.log("Сортировка по priority по возрастанию: ", newToDoList.tasks);
newToDoList.sortTasks(sortTypeId, sortHighToLow);
console.log("Сортировка по id по убыванию: ", newToDoList.tasks);
newToDoList.sortTasks(sortTypePriority, sortHighToLow);
console.log("Сортировка по priority по убыванию: ", newToDoList.tasks);
newToDoList.sortTasks(sortTypeId, sortLowToHigh);
console.log("Сортировка по id по возрастанию: ", newToDoList.tasks);
