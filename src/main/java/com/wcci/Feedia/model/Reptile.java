package com.wcci.Feedia.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Reptile {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String species;
    private int age;
    private String gender;
    private String image;

    @OneToMany(mappedBy = "reptile", cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<Need> needs;

    @OneToMany(mappedBy = "reptile", cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<Schedule> schedules;

    @OneToMany(mappedBy = "reptile", cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<Note> notes;

    public Reptile(String name, String species, int age, String gender, String image) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.gender = gender;
        this.image = image;
    }

    public Reptile(){

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSpecies() {
        return species;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public Collection<Need> getNeeds() {
        return needs;
    }

    public Collection<Schedule> getSchedules() {
        return schedules;
    }

    public Collection<Note> getNotes() {
        return notes;
    }
}