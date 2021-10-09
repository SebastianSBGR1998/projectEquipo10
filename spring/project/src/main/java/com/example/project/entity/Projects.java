package com.example.project.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "proyects")
@Getter @Setter
public class Projects {

    @Id
    private String id;
    private String name;
    private String description;
    private int budget;
    private String dinit;
    private String dfin;
    private String[] leaders;
    private String[] students;
    private Boolean active;
    private String status;
    private String[] advances;


    public Projects (String name, String description, int budget, String dinit, String dfin, String[] leaders, String[] students, Boolean active, String status, String[] advances) {
        this.name = name;
        this.description = description;
        this.budget = budget;
        this.dinit = dinit;
        this.dfin = dfin;
        this.leaders = leaders;
        this.students = students;
        this.active = active;
        this.status = status;
        this.advances = advances;
    }

    public Projects() {
    }


}
