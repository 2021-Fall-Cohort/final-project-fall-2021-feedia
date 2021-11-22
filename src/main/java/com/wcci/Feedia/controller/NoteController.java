package com.wcci.Feedia.controller;

import com.wcci.Feedia.model.Note;
import com.wcci.Feedia.repository.NeedRepository;
import com.wcci.Feedia.repository.NoteRepository;
import com.wcci.Feedia.repository.ReptileRepository;
import com.wcci.Feedia.repository.ScheduleRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notes")
public class NoteController {

    private ReptileRepository reptileRepo;
    private NeedRepository needRepo;
    private NoteRepository noteRepo;
    private ScheduleRepository scheduleRepo;

    public NoteController(ReptileRepository reptileRepo, NeedRepository needRepo, NoteRepository noteRepo, ScheduleRepository scheduleRepo) {
        this.reptileRepo = reptileRepo;
        this.needRepo = needRepo;
        this.noteRepo = noteRepo;
        this.scheduleRepo = scheduleRepo;
    }

    @GetMapping("/")
    public Iterable<Note> retrieveAllNotes() {
        return noteRepo.findAll();
    }

    @PostMapping("/")
    public Iterable<Note> addNote(@RequestBody Note note) {
        noteRepo.save(note);
        return noteRepo.findAll();
    }

    @PutMapping("/")
    public Iterable<Note> editNote(@RequestBody Note noteToEdit) {
        if (noteToEdit.getId() != null) {
            noteRepo.save(noteToEdit);
        }
        return noteRepo.findAll();
    }
}
