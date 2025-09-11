// src/components/AboutUs.jsx
import React from 'react';
import { RocketIcon, LightbulbIcon, RotateIcon } from '../assets/AboutIcons';

const InfoCard = ({ icon, title, text }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center w-full sm:w-80 h-auto sm:h-96">
        <div className="w-16 h-16 mb-4">
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{text}</p>
    </div>
);


const AboutUs = () => {
    const cardText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

    return (
        <section className="bg-gray-100 py-20 px-4 sm:px-8 md:px-16">
            <div className="text-center mb-12">
                <h2 className="text-blue-800 text-3xl sm:text-4xl font-bold mb-4">WHO WE ARE</h2>
                <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <InfoCard icon={<RocketIcon />} title="Lorem Ipsum is simply" text={cardText} />
                <InfoCard icon={<LightbulbIcon />} title="Lorem Ipsum is simply" text={cardText} />
                <InfoCard icon={<RotateIcon />} title="Lorem Ipsum is simply" text={cardText} />
            </div>
        </section>
    );
};

export default AboutUs;