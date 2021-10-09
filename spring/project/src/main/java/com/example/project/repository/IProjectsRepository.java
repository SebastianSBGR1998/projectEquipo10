package com.example.project.repository;

import com.example.project.entity.Projects;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProjectsRepository extends MongoRepository<Projects, Long> {

}
