import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, Subscriber} from 'rxjs';
import {Note} from '../interfaces/note';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  API_URL = environment.apiUrlRoot + '/notes-service';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private _http: HttpClient) {
  }

  public getAllNotes(): Observable<Note[]> {
    return this._http.get(this.API_URL + '/getAllNotes', this.httpOptions) as Observable<Note[]>;
  }

  public addNote(note: Note): Observable<Note> {
    return this._http.post(this.API_URL + '/saveNote', note) as Observable<Note>;
  }

  public editNote(note: Note): Observable<Note> {
    return this._http.post(this.API_URL + '/saveNote', note) as Observable<Note>;
  }

  public deleteNote(id): Observable<{}> {
    const url = this.API_URL + '/deleteNote/' + id;
    return this._http.delete(this.API_URL + '/deleteNote/' + id) as Observable<{}>;
  }

  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  public getNote(id): Observable<Note> {
    return this._http.get(this.API_URL + '/getNote/' + id) as Observable<Note>;
    /*const note: Note = this._notes[index];
    return Observable.create((observer: Subscriber<any>) => {
      observer.next(note);
      observer.complete();
    });*/
  }
}
