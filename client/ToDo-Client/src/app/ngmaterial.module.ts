import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import {  MatButtonModule, MatListModule, MatMenuModule, MatIconModule, MatCardModule, MatInputModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialAppModule {}
