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
  deleteTask(id) {
    if (!this.tasks.findIndex((el) => el.id === id)) {
      console.log(`Элемента с id=${id} не существует`);
      return;
    } else {
      this.tasks.splice(
        this.tasks.findIndex((el) => el.id === id),
        1
      );
    }
  },
  updateTask(id, title, priority) {
    if (!this.tasks.findIndex((el) => el.id === id)) {
      console.log(`Элемента с id=${id} не существует`);
      return;
    } else if (!title || !priority) {
      console.log("Введите заголовок и приоритет!");
    } else {
      this.tasks[this.tasks.findIndex((el) => el.id === id)].title = title;
      this.tasks[this.tasks.findIndex((el) => el.id === id)].priority =
        priority;
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

const newTask = {
  tasks: [
    {
      title: "Помыть посуду",
      description: "Очень тщательно помыть!",
      id: 1,
      priority: 1,
    },
  ],
};

const addTask = toDoList.addTask.bind(newTask);
const deleteTask = toDoList.deleteTask.bind(newTask);
const sortTasks = toDoList.sortTasks.bind(newTask);
const updateTask = toDoList.updateTask.bind(newTask);

console.log("Изначальный список: ", newTask.tasks);

addTask("Убраться", 10);
addTask("Покушать", 3);
addTask("Покататься", 5);
addTask("Сделать домашку", 8);
console.log("Добавили 4 задачи: ", newTask.tasks);

deleteTask(3);
console.log("Удалили задачу с id = 3: ", newTask.tasks);

updateTask(4, "Тренировка", 7);
console.log("Обновили задачу с id = 4: ", newTask.tasks);

sortTasks(sortTypePriority, sortLowToHigh);
console.log("Сортировка по priority по возрастанию: ", newTask.tasks);
sortTasks(sortTypeId, sortHighToLow);
console.log("Сортировка по id по убыванию: ", newTask.tasks);
sortTasks(sortTypePriority, sortHighToLow);
console.log("Сортировка по priority по убыванию: ", newTask.tasks);
sortTasks(sortTypeId, sortLowToHigh);
console.log("Сортировка по id по возрастанию: ", newTask.tasks);
