"use client";

import Image from 'next/image';
import React from 'react';
import ServiceModal from './ServiceModal';

export interface ServiceCardProps {
  icon?: React.ReactNode;
  image?: string;
  heading: string;
  description: string;
  onClick?: () => void;
}

export default function ServiceCard({ icon, image, heading, description, onClick }: ServiceCardProps) {
  return (
    <div
      className="relative rounded-lg p-[3px] bg-gradient-to-br via-[#f3f3f3] from-[var(--secondary)] to-[#1d84d0] hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative bg-white rounded-lg h-full p-6">
        {/* Icon/Image container */}
        <div className="w-16 h-16 rounded-full border-2 border-gradient-to-br from-[#f3f3f3] via-[var(--secondary)] to-[#1b2232] flex items-center justify-center mb-4 bg-gradient-to-br from-white via-red-50 to-blue-50">
          {icon ? (
            <div className="text-2xl">{icon}</div>
          ) : image ? (
            <Image
              src={image}
                alt={heading}
                width={20}
                height={20}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--secondary)] to-[#1b2232]"></div>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">{heading}</h3>
        <p className="text-gray-600 text-sm text-left leading-relaxed">{description}</p>

        {/* Ellipsis for "more" */}
        <div className="absolute bottom-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 group-hover:text-[var(--secondary)] transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="2" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="18" cy="12" r="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export interface ServiceGridProps {
  services: ServiceCardProps[];
  title?: string;
}

export function ServiceGrid({ services, title = "Our Services" }: ServiceGridProps) {
  const [selectedService, setSelectedService] = React.useState<ServiceCardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleCardClick = (service: ServiceCardProps) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section className="relative z-10 bg-white px-8 sm:px-16 md:px-24 lg:px-32 py-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-white via-[#e80500] to-[#1b2232] bg-clip-text text-transparent">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              image={service.image}
              heading={service.heading}
              description={service.description}
              onClick={() => handleCardClick(service)}
            />
          ))}
        </div>
      </section>

      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          heading={selectedService.heading}
          description={selectedService.description}
        />
      )}
    </>
  );
}
