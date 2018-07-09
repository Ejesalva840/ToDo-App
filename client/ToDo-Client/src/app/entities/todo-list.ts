import { ToDoItem } from './todo-item';
export interface ToDoList {
    listId: number;
    listName: string;
    todoItems: ToDoItem[];
}
