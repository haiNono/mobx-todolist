import { makeAutoObservable } from "mobx";

export interface Todo {
  done: boolean;
  title: string;
  id: number;
}

class Todos {
  constructor() {
    makeAutoObservable(this);
  }

  todos = [
    { title: "吃饭", done: false, id: Math.random() },
    { title: "睡觉", done: false, id: Math.random() },
    { title: "打豆豆", done: true, id: Math.random() },
  ];

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
  };

  delTodo = (id: number) => {
    this.todos.forEach((item: Todo, index, arr) => {
      if (item.id === id) {
        arr.splice(index,1);
      }
    });
  };

  changeDone = (id: number) => {
    this.todos.forEach((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
    });
  };
}

export const todoStore = new Todos();
