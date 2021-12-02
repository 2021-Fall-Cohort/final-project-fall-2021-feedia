package com.wcci.Feedia.controller;

import com.wcci.Feedia.model.Reptile;
import com.wcci.Feedia.model.Schedule;
import com.wcci.Feedia.model.TempHumidity;
import com.wcci.Feedia.repository.NeedRepository;
import com.wcci.Feedia.repository.NoteRepository;
import com.wcci.Feedia.repository.ReptileRepository;
import com.wcci.Feedia.repository.ScheduleRepository;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

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

    @GetMapping("/{id}")
    public Reptile retrieveSingleReptile(@PathVariable Long id) {
        return reptileRepo.findById(id).get();
    }

    @PostMapping("/")
    public Iterable<Reptile> addReptile(@RequestBody Reptile reptile) {
        reptileRepo.save(reptile);
        return reptileRepo.findAll();
    }

    @PutMapping("/")
    public Iterable<Reptile> editReptile(@RequestBody Reptile reptileToEdit) {
        if (reptileToEdit.getId() != null) {
            reptileRepo.save(reptileToEdit);
        }
        return reptileRepo.findAll();
    }

//    @PatchMapping("/{id}/updateTemp")
//    public Reptile retrieveReptileTemperature(@PathVariable Long id, @RequestBody float newTemp){
//        Reptile reptileToUpdate = reptileRepo.findById(id).get();
//        reptileToUpdate.setTemp(newTemp);
//        reptileRepo.save(reptileToUpdate);
//        return reptileRepo.findById(id).get();
//    }
//
//    @PatchMapping("/{id}/updateHumidity")
//    public Reptile retrieveReptileHumidity(@PathVariable Long id, @RequestBody float newHumidity){
//        Reptile reptileToUpdate = reptileRepo.findById(id).get();
//        reptileToUpdate.setHumidity(newHumidity);
//        reptileRepo.save(reptileToUpdate);
//        return reptileRepo.findById(id).get();
//    }

    @PatchMapping("/{id}/update")
    public Reptile updateReptileData(@PathVariable Long id, @RequestBody TempHumidity newData){
        Reptile reptileToUpdate = reptileRepo.findById(id).get();
        reptileToUpdate.setHumidity(newData.getHumidity());
        reptileToUpdate.setTemp(newData.getTemp());
        reptileRepo.save(reptileToUpdate);
        return reptileRepo.findById(id).get();

    }

}
