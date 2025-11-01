import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-700">{description}</p>
            <div className="mt-2">
                <span className="font-medium">Technologies:</span>
                <ul className="list-disc list-inside">
                    {technologies.map((tech, index) => (
                        <li key={index} className="text-gray-600">{tech}</li>
                    ))}
                </ul>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;