import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form: FormGroup;
  description: string;
  title: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NavigationComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.description = data.description;
      this.title = data.title;

      this.form = fb.group({
        item: ['', [Validators.required]]
      });
    }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
}
