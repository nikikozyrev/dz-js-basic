"use strict";

const sortTypeId = "id";
const sortTypePriority = "priority";

const sortLowToHigh = "LowToHigh";
const sortHighToLow = "HighToLow";

const toDoList = {
  tasks: [{ title: "Помыть посуду", id: 1, priority: 1 }],
  addTask: function (title, priority) {
    this.tasks.push({
      title,
      id: this.tasks[this.tasks.length - 1].id + 1,
      priority,
    });
  },
  findIndexTask: function (id) {
    return this.tasks.findIndex((el) => el.id === id);
  },
  deleteTask: function (id) {
    this.tasks.splice(this.findIndexTask(id), 1);
  },
  updateTask: function (id, title, priority) {
    this.tasks[this.findIndexTask(id)].title = title;
    this.tasks[this.findIndexTask(id)].priority = priority;
  },
  sortTasks: function (sortType, sortOrder) {
    switch (sortOrder) {
      case "LowToHigh":
        switch (sortType) {
          case "id":
            this.tasks.sort((a, b) => a.id - b.id);
          case "priority":
            this.tasks.sort((a, b) => a.priority - b.priority);
        }
      case "HighToLow":
        switch (sortType) {
          case "id":
            this.tasks.sort((a, b) => b.id - a.id);
          case "priority":
            this.tasks.sort((a, b) => b.priority - a.priority);
        }
    }
  },
};

console.log("Изначальный список: ", toDoList.tasks);

toDoList.addTask("Убраться", 10);
toDoList.addTask("Покушать", 3);
toDoList.addTask("Покататься", 5);
toDoList.addTask("Сделать домашку", 8);
console.log("Добавили 3 задачи: ", toDoList.tasks);

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
