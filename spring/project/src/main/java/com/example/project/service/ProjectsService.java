package com.example.project.service;

import com.example.project.entity.Projects;
import com.example.project.repository.IProjectsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectsService {

    private final IProjectsRepository projectsRepository;

    public ProjectsService(IProjectsRepository userRepository) {
        this.projectsRepository = userRepository;
    }

    public Projects agregarProjects(Projects user){
        return projectsRepository.save(user);
    }

    public Projects verProjects(Long id){
        return projectsRepository.findById(id).get();
    }

    public List<Projects> listarProjects(){
        return projectsRepository.findAll();
    }

}
