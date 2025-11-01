import React from 'react';
import ExperienceCard from '../../components/ExperienceCard';
import { resumeData } from '../../data/resume';

const ExperiencePage = () => {
    return (
        <div className="experience-section">
            <h1 className="text-3xl font-bold mb-4">Experience</h1>
            <div className="experience-list">
                {resumeData.professionalExperience.map((experience, index) => (
                    <ExperienceCard 
                        key={index} 
                        title={experience.title}
                        company={experience.company}
                        date={experience.duration}
                        description={experience.responsibilities.join(' • ')}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExperiencePage;