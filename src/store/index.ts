import { defineStore } from "pinia";
import { ToDoItem } from "./types";

export const useTodoStore = defineStore('ToDoStore', {
  state: () => ({
    todos:[] as ToDoItem[]
  }),
  actions: {
    addTodo(item: string) {
      this.todos.push({ item, id: 1, done: false })
    }
  }
})