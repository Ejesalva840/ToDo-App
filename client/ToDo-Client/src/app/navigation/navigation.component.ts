import { DialogComponent } from './../dialog/dialog.component';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog) {}

  openDialog(type: string) {
    const dialogConfig = new MatDialogConfig();
    const description;
    const title;

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
      data => console.log('Dialog output: ', data);
    )
  }
}
