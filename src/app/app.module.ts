import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { TaskListComponent } from './views/task-list/task-list.component';
import { StatComponent } from './views/stat/stat.component';
import { StatCardComponent } from './views/stat-card/stat-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TaskListComponent,
    StatComponent,
    StatCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
