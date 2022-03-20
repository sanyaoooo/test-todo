import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CommentsComponent } from './comments/comments.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'comments', component: CommentsComponent },
  { path: 'todolist', component: TodolistComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CommentsComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
