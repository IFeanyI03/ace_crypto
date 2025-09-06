import React from 'react';
import { Mobile, Globe, Comment } from '../assets/Icons';

// You can use an icon library like 'react-icons' for the svgs
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white py-[35px] px-4 rounded-lg shadow-md flex flex-col gap-2.5 h-[370px] w-[338px] text-left">
    <img src={icon} />
    <h3 className="text-xl font-bold h-[72px]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Comment,
      title: 'Web App Development',
      description: 'AceTech delivers best-in-class web solutions for your business and retain the attention of the target.'
    },
    {
      icon: Globe,
      title: 'IT consultancy',
      description: 'AceTech delivers best-in-class web solutions for your business and retain the attention of the target.'
    },
    {
      icon: Mobile,
      title: 'Mobile App Development',
      description: 'AceTech delivers best-in-class web solutions for your business and retain the attention of the target.'
    }
  ];

  return (
    <section className="h-[827px] px-[121px]">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-[32px] font-bold">Web Development</h2>
        <p className="font-medium">Bringing IT solutions for your Business</p>
        <div className="flex gap-21">
          {services.map(service => (
            <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;