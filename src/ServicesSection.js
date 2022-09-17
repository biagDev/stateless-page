import React from 'react';
import ServiceBlock from './ServiceBlock';

function ServicesSection() {
  const SERVICE_BLOCK_DATA = [
    {
      imgURL: 'https://assets.codepen.io/6060109/agency-service-1.png',
      text: 'web design',
    },
    {
      imgURL: 'https://assets.codepen.io/6060109/agency-service-2.png',
      text: 'ecommerce',
    },
    {
      imgURL: 'https://assets.codepen.io/6060109/agency-service-3.png',
      text: 'automation',
    },
  ];

  return (
    <div className='services-section'>
      <h2>our services</h2>

      <div className='service-container'>
        {SERVICE_BLOCK_DATA.map(block => (
          <ServiceBlock block={block} />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
