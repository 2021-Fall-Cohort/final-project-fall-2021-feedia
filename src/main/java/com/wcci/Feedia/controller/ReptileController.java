package com.wcci.Feedia.controller;

import com.wcci.Feedia.model.Reptile;
import com.wcci.Feedia.repository.NeedRepository;
import com.wcci.Feedia.repository.NoteRepository;
import com.wcci.Feedia.repository.ReptileRepository;
import com.wcci.Feedia.repository.ScheduleRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reptiles")
public class ReptileController {

    private ReptileRepository reptileRepo;
    private NeedRepository needRepo;
    private NoteRepository noteRepo;
    private ScheduleRepository scheduleRepo;

    public ReptileController(ReptileRepository reptileRepo, NeedRepository needRepo, NoteRepository noteRepo, ScheduleRepository scheduleRepo) {
        this.reptileRepo = reptileRepo;
        this.needRepo = needRepo;
        this.noteRepo = noteRepo;
        this.scheduleRepo = scheduleRepo;
    }

    @GetMapping("/")
    public Iterable<Reptile> retrieveAllReptiles(){
        return reptileRepo.findAll();
    }
}
