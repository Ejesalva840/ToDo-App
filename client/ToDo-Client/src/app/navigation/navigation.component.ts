import { DetailDisplayComponent } from './../detail-display/detail-display.component';
import { ToDoList } from './../entities/todo-list';
import { ListService } from './../services/list.service';
import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatList } from '@angular/material/list';
import { MatSidenav } from '@angular/material';
import { ToDoItem } from '../entities/todo-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  todoList: ToDoList[];
  selectedList: ToDoList;

  @ViewChild(MatList) selectionList: MatList;
  @ViewChild(DetailDisplayComponent) listDetails: DetailDisplayComponent;
  @ViewChild(MatSidenav) sideNav: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getToDoList()
      .subscribe(data => this.todoList = data);
  }

  openDialog(type: string) {
    const dialogConfig = new MatDialogConfig();
    let description;
    let title;

    if (type === 'list') {
      description = 'New list name';
      title = 'Create new todo list';
    } else {
      description = 'Item name';
      title = 'Add new todo item';
    }

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      description: description,
      title: title
    };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data === undefined || data.item === undefined || this.selectedList === undefined) {
          return;
        }

        if (type === 'list') {
          this.todoList.push(<ToDoList>{listName: data.item});
        } else {
          this.selectedList.todoItems.push(<ToDoItem>{itemName: data.item});
        }
      }
    );
  }

  onListSelect(list: ToDoList) {
    console.log('List select: ' + list.listName);
    this.selectedList = list;
    this.listDetails.selectedList = this.selectedList;
    this.sideNav.close();
  }
}
