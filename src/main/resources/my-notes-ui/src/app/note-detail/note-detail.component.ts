import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NoteService} from '../services/note.service';
import {Note} from '../interfaces/note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  note: Note;
  constructor(private router: ActivatedRoute, private _noteService: NoteService) {
    this.getNoteDetails(this.router.snapshot.params['id']);
  }

  ngOnInit() {
  }

  getNoteDetails(id) {
    this._noteService.getNote(id).subscribe((data) => {
      this.note = data;
      },
      (error) => {
        console.log('Error retrieving note', error);
      });
  }
}
