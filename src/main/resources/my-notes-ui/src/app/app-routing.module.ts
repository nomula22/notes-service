import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NoteAddComponent} from './note-add/note-add.component';
import {NoteEditComponent} from './note-edit/note-edit.component';
import {NoteDetailComponent} from './note-detail/note-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add-note',
    component: NoteAddComponent,
  },
  {
    path: 'edit-note/:id',
    component: NoteEditComponent,
  },
  {
    path: 'view-note/:id',
    component: NoteDetailComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {enableTracing: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
