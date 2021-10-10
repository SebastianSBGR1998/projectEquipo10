package com.example.project.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "users")
@Getter @Setter
public class User {

    @Id
    private Long id;
    private String nick;
    private String password;
    private String role;
    private String user;
    private String email;


    public User( String nick, String password, String role, String user , String email) {

        this.nick = nick;
        this.password = password;
        this.role = role;
        this.user = user;
        this.email = email;


    }

    public User() {
    }
}
