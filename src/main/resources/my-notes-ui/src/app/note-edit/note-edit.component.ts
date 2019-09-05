import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NoteService} from '../services/note.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Note} from '../interfaces/note';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  note: Note;
  errorExists = false;
  editForm: FormGroup;
  constructor(private router: ActivatedRoute, private fb: FormBuilder, private _noteService: NoteService) {
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators. maxLength(255)] ],
      content: ['', [Validators.required, Validators. maxLength(1024)] ]
    });
    this._noteService.getNote(this.router.snapshot.params['id']).subscribe((data) => {
        this.editForm.setValue({
          title: data.title,
          content: data.content
        });
      },
      (error) => {
        console.log('Error retrieving note', error);
      });
  }

  onSubmit() {
    const result: Note = Object.assign({}, this.editForm.value);
    result.id = this.router.snapshot.params['id'];
    this._noteService.editNote(result)
      .subscribe((note) => {
          this.note = note;
          console.log('Edited');
        },
        (error) => {
          this.errorExists = true;
          console.log('Error retrieving notes', error);
        });
  }

  clearForm() {
    this.editForm.reset();
  }
}
