import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MOCK_LIST } from '../entities/MOCK_LIST';
import { ToDoList } from '../entities/todo-list';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  serverUrl = 'http://localhost:8080/v1/list';

  getToDoList(): Observable<ToDoList[]> {
    return this.http.get<ToDoList[]>(this.serverUrl);
  }

  createToDoList(listName: string): Observable<ToDoList> {
    return this.http.post<ToDoList>(this.serverUrl, {
      'listName': listName
    });
  }
}
