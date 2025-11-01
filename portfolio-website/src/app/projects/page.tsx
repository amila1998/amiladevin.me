import React from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';

const ProjectsPage = () => {
    return (
        <div className="projects-container">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;