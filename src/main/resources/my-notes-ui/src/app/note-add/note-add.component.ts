import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {Note} from '../interfaces/note';
import {NoteService} from '../services/note.service';


@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {
  note: Note;
  errorExists = false;
  addForm: FormGroup;
  constructor(private fb: FormBuilder, private _noteService: NoteService) {
    this.validateForm();
  }
  validateForm() {
    this.addForm = this.fb.group({
      title: ['', [Validators.required, Validators. maxLength(255)] ],
      content: ['', [Validators.required, Validators. maxLength(1024)] ]
    });
  }
  ngOnInit() {
  }
  clearForm() {
  this.addForm.reset();
  this.note = undefined;
  }
  onSubmit() {
  const result: Note = Object.assign({}, this.addForm.value);
    this._noteService.addNote(result)
      .subscribe((note) => {
          this.note = note;
          console.log('Added');
        },
        (error) => {
          this.errorExists = true;
          console.log('Error retrieving notes', error);
        });
  }
}
