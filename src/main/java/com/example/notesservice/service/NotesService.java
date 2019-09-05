package com.example.notesservice.service;

import com.example.notesservice.model.Note;
import com.example.notesservice.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotesService {

    @Autowired
    private NoteRepository noteRepository;

    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    public Note getNoteById(Long id){
        return noteRepository.findById(id).get();
    }

    public Note saveNote(Note note){
        return noteRepository.save(note);
    }

    public void deleteNote(Long id){
        noteRepository.deleteById(id);
    }
}
