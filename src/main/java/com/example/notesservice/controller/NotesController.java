package com.example.notesservice.controller;

import com.example.notesservice.model.Note;
import com.example.notesservice.service.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NotesController {

    @Autowired
    private NotesService notesService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/notes-service/getAllNotes", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Note> getAllNotes(){
        return notesService.getAllNotes();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/notes-service/getNote/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Note getNoteById(@PathVariable Long id){
        return notesService.getNoteById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/notes-service/saveNote", produces = MediaType.APPLICATION_JSON_VALUE)
    public Note saveNote(@RequestBody Note note) {
        return notesService.saveNote(note);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(value = "/notes-service/deleteNote/{id}")
    public void deleteNote(@PathVariable Long id) {
        notesService.deleteNote(id);
    }
}
