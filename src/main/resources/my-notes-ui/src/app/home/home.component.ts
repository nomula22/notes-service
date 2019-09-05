import { Component, OnInit } from '@angular/core';
import {Note} from '../interfaces/note';
import {NoteService} from '../services/note.service';
import { MatDialog } from '@angular/material';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public notes: Note[];

  constructor(private _noteService: NoteService, public dialog: MatDialog) { }

  ngOnInit() {
    this._getAllNotes();
  }

  private _getAllNotes(): void {
    this._noteService.getAllNotes()
      .subscribe((notes) => {
          this.notes = notes;
          console.log(this.notes);
        },
        (error) => {
          console.log('Error retrieving notes', error);
        });
  }

  private _isNoteListEmpty(): boolean {
    return !this.notes || !this.notes.length;
  }

  private openDialog(id) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Do you confirm the deletion of this note?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._noteService.deleteNote(id).subscribe(
          (val) => {
            console.log('DELETE call successful value returned in body',
              val);
          },
          response => {
            console.log('DELETE call in error', response);
          },
          () => {
            console.log('The DELETE observable is now completed.');
            this._getAllNotes();
          });
      }
    });
  }

}
