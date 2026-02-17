import React from 'react';
import { ServiceGrid } from '@/components/ServiceCard';
import ServiceSlides from '@/components/ServiceSlides';

export default function Services() {
  const services = [
    {
      heading: 'Audio Visual Solutions',
      description: 'Professional audio-visual systems for conferences, meetings, and presentations with cutting-edge technology.',
    },
    {
      heading: 'Future Ready Networks',
      description: 'Scalable network infrastructure designed for the demands of tomorrow\'s digital landscape.',
    },
    {
      heading: 'Intrusion Detection',
      description: 'Advanced security systems to protect your premises from unauthorized access and threats.',
    },
    {
      heading: 'IT Support',
      description: 'Comprehensive technical support and maintenance services for all your IT infrastructure needs.',
    },
    {
      heading: 'Access Control',
      description: 'Secure access management systems with biometric and card-based authentication solutions.',
    },
    {
      heading: 'Control Room Solutions',
      description: 'Integrated command and control centers for monitoring and managing critical operations.',
    },
    {
      heading: 'IT Procurement',
      description: 'End-to-end procurement services for all your hardware and software requirements.',
    },
    {
      heading: 'Network Infrastructure',
      description: 'Robust networking solutions including structured cabling, switches, and wireless systems.',
    },
  ];

  return (
      <>
          <ServiceSlides/>
          <ServiceGrid services={services} />
    </>
  );
}
