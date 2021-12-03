package com.wcci.Feedia;

import com.wcci.Feedia.model.Need;
import com.wcci.Feedia.model.Note;
import com.wcci.Feedia.model.Reptile;
import com.wcci.Feedia.model.Schedule;
import com.wcci.Feedia.repository.NeedRepository;
import com.wcci.Feedia.repository.NoteRepository;
import com.wcci.Feedia.repository.ReptileRepository;
import com.wcci.Feedia.repository.ScheduleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private ReptileRepository reptileRepo;
    private NeedRepository needRepo;
    private NoteRepository noteRepo;
    private ScheduleRepository scheduleRepo;

    public Populator(ReptileRepository reptileRepo, NeedRepository needRepo, NoteRepository noteRepo, ScheduleRepository scheduleRepo) {
        this.reptileRepo = reptileRepo;
        this.needRepo = needRepo;
        this.noteRepo = noteRepo;
        this.scheduleRepo = scheduleRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        Reptile reptile1 = new Reptile("Higgins", "Red-Snouted Snake", 4, "Male","../images/kaiju.png", "Red nose, brown body, bad temper");
        reptileRepo.save(reptile1);

        Reptile reptile2 = new Reptile("Higgins", "Red-Snouted Snake", 4, "Male","../images/kaiju.png", "Red nose, brown body, bad temper");
        reptileRepo.save(reptile2);

        Need need1 = new Need("Medicine Twice Daily", reptile1);
        needRepo.save(need1);

        Note note1 = new Note("Observation", "Stepped in its own poop on 11/22/2021 at 11:47 AM", true, reptile1);
        noteRepo.save(note1);

        Schedule schedule1 = new Schedule("Poop Laying", "Needs to go twice daily", 12, reptile1);
        scheduleRepo.save(schedule1);
    }
}
