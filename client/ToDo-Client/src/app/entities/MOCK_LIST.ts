import { ToDoList } from './todo-list';
import { ToDoItem } from './todo-item';

export const MOCK_LIST: ToDoList[] = [
    {
        listId: 1,
        listName: 'First List',
        todoItems: [
            {
                itemId: 1,
                itemName: 'Item One',
                isComplete: false
            },
            {
                itemId: 2,
                itemName: 'Item Two',
                isComplete: false
            }
        ]
    },
    {
        listId: 2,
        listName: 'Second List',
        todoItems: [
            {
                itemId: 3,
                itemName: 'Item One',
                isComplete: true
            },
            {
                itemId: 4,
                itemName: 'Test Item',
                isComplete: false
            }
        ]
    }
];
