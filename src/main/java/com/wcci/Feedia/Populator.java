package com.wcci.Feedia;

import com.wcci.Feedia.model.Need;
import com.wcci.Feedia.model.Note;
import com.wcci.Feedia.model.Reptile;
import com.wcci.Feedia.model.Schedule;
import com.wcci.Feedia.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private ReptileRepository reptileRepo;
    private NeedRepository needRepo;
    private NoteRepository noteRepo;
    private ScheduleRepository scheduleRepo;
    private GoogleCalendarRepo googleCalendarRepo;

    public Populator(ReptileRepository reptileRepo, NeedRepository needRepo, NoteRepository noteRepo, ScheduleRepository scheduleRepo, GoogleCalendarRepo googleCalendarRepo) {
        this.reptileRepo = reptileRepo;
        this.needRepo = needRepo;
        this.noteRepo = noteRepo;
        this.scheduleRepo = scheduleRepo;
        this.googleCalendarRepo = googleCalendarRepo;
    }

    @Override
    public void run(String... args) throws Exception {

        Reptile reptile1 = new Reptile("Higgins", "Corn Snake", 4, "Male","../images/kaiju.png", "Brown body, bad temper", 0f, 0f);
        reptileRepo.save(reptile1);
        reptile1.createCalendar();
        reptile1.myCalendar.setReptile(reptile1);
        googleCalendarRepo.save(reptile1.getMyCalendar());


        Reptile reptile2 = new Reptile("Webster", "Bearded Dragon", 6, "Male","../images/webster.jpg", "Loves crickets and kale", 0f, 0f);
        reptileRepo.save(reptile2);
        reptile2.createCalendar();
        reptile2.myCalendar.setReptile(reptile2);
        googleCalendarRepo.save(reptile2.getMyCalendar());

        Reptile reptile3 = new Reptile("Ginger", "Leopard Gecko", 3, "Female","../images/ginger.jpg", "Loves to eat anything", 0f, 0f);
        reptileRepo.save(reptile3);
        reptile3.createCalendar();
        reptile3.myCalendar.setReptile(reptile3);
        googleCalendarRepo.save(reptile3.getMyCalendar());

        Reptile reptile4 = new Reptile("Cosmo", "Chameleon", 4, "Male","../images/cosmo.jpg", "Likes staring at the wall", 0f, 0f);
        reptileRepo.save(reptile4);
        reptile4.createCalendar();
        reptile4.myCalendar.setReptile(reptile4);
        googleCalendarRepo.save(reptile4.getMyCalendar());

        Need need1 = new Need("Medicine Twice Daily", reptile1);
        needRepo.save(need1);

        Note note1 = new Note("Observation:", "Stepped in its own poop on 11/22/2021 at 11:47 AM", true, reptile1);
        noteRepo.save(note1);
//        note1.setReptile(reptile1);
//        reptileRepo.save(reptile1);

        Note note2 = new Note("Observation:", "Tried to eat newspaper.", true, reptile2);
        noteRepo.save(note2);
//        note2.setReptile(reptile2);
//        reptileRepo.save(reptile2);

        Note note3 = new Note("Observation:", "Tried to climb up the glass again.", true, reptile3);
        noteRepo.save(note3);
//        note3.setReptile(reptile3);
//        reptileRepo.save(reptile3);

        Note note4 = new Note("Observation:", "Couldn't find a few crickets.", true, reptile4);
        noteRepo.save(note4);
//        note4.setReptile(reptile4);
//        reptileRepo.save(reptile4);

        Schedule schedule1 = new Schedule("Poop Laying", "Needs to go twice daily", 12, reptile1);
        scheduleRepo.save(schedule1);

        
    }
}
