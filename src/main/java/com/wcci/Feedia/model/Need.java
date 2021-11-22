package com.wcci.Feedia.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Need {

    @Id
    @GeneratedValue
    private Long id;

    @Lob
    private String description;

    @ManyToOne
    @JsonIgnore
    private Reptile reptile;

    public Need(String description, Reptile reptile) {
        this.description = description;
        this.reptile = reptile;
    }

    public Need() {
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Reptile getReptile() {
        return reptile;
    }
}
