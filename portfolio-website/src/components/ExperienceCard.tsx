import React from 'react';

interface ExperienceCardProps {
    title: string;
    company: string;
    date: string;
    description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, date, description }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <h4 className="text-md text-gray-600">{company}</h4>
            <p className="text-sm text-gray-500">{date}</p>
            <p className="mt-2 text-gray-700">{description}</p>
        </div>
    );
};

export default ExperienceCard;