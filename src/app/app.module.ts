import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { TaskListComponent } from './views/task-list/task-list.component';
import { StatComponent } from './views/stat/stat.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { MaterialModule } from './shared/material.module';
import { TableComponent } from './views/table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TaskListComponent,
    StatComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
