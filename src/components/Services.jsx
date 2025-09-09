import React from 'react';
// import { Mobile, Globe, Comment } from '../assets/Icons';
import Comment from '../assets/comment-alt.svg'
import Mobile from '../assets/mobile-alt.svg'
import Globe from '../assets/globe.svg'

// You can use an icon library like 'react-icons' for the svgs
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white py-6 px-4 rounded-lg shadow-md flex flex-col gap-2.5 h-auto md:h-[370px] w-full sm:w-[338px] text-left">
    <img className='w-10 h-10 object-contain' src={icon}/>
    <h3 className="text-xl sm:text-2xl font-bold h-auto md:h-[72px]">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base">{description}</p>
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
    <section className="relative h-fit pb-10 md:pb-20 px-4 sm:px-8 md:px-[121px]">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold">Web Development</h2>
        <p className="font-medium">Bringing IT solutions for your Business</p>
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
          {services.map(service => (
            <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;