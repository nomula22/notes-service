package com.example.notesservice.repository;

import com.example.notesservice.model.Note;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NoteRepository extends CrudRepository<Note, Long> {

    @Override
    List<Note> findAll();

}
