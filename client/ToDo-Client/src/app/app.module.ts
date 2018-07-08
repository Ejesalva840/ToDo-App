import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialAppModule } from './ngmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialAppModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
