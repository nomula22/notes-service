import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NoteService } from './services/note.service';
import {HttpClientModule} from '@angular/common/http';
import { NoteAddComponent } from './note-add/note-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import {NgMaterialModule} from './NgMaterialModule';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteAddComponent,
    NoteEditComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMaterialModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
