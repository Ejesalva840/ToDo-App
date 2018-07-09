import { ToDoList } from './../entities/todo-list';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-display',
  templateUrl: './detail-display.component.html',
  styleUrls: ['./detail-display.component.css']
})
export class DetailDisplayComponent implements OnInit {

  private _selectedList: ToDoList;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set selectedList(list: ToDoList) {
    this._selectedList = list;
  }

  get selectedList(): ToDoList { return this._selectedList; }

}
