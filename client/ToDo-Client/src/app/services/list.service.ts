import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MOCK_LIST } from '../entities/MOCK_LIST';
import { ToDoList } from '../entities/todo-list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getToDoList(): Observable<ToDoList[]> {
    return of(MOCK_LIST);
  }
}
