import React from 'react';
import './FeaturedListings.css'; 

const ListingCard = ({ image, title, location, price, type }) => {
  return (
    <div className="listing-card">
      <div className="listing-image" style={{ backgroundImage: `url(${image})` }}>
        <span className="listing-type">{type}</span>
      </div>
      <div className="listing-info">
        <h3>{title}</h3>
        <p className="listing-location">{location}</p>
        <p className="listing-price">{price}</p>
        <button className="btn btn-primary btn-small">Ver Detalles</button>
      </div>
    </div>
  );
};

// src/components/FeaturedListings/FeaturedListings.js
import React from 'react';
import ListingCard from './ListingCard';
import './FeaturedListings.css';

const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      image: '',
      title: 'Casa Familiar con Jardín',
      location: 'Palermo, Buenos Aires',
      price: '$350.000',
      type: 'Venta'
    },
    {
      id: 2,
      image: '',
      title: 'Departamento Céntrico con Balcón',
      location: 'Recoleta, Buenos Aires',
      price: '$1.200/mes',
      type: 'Alquiler'
    },
    {
      id: 3,
      image: '',
      title: 'Villa de Lujo con Piscina',
      location: 'Pilar, Buenos Aires',
      price: '$850.000',
      type: 'Venta'
    },
    {
      id: 4,
      image: '../Images/KP04.jpg',
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
     {
      id: 5,
      image: '../Images/KP04.jpg',
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
     {
      id: 6,
      image: '../Images/KP04.jpg',
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
     {
      id: 7,
      image: '../Images/KP05.jpg',
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
     {
      id: 8,
      image: '../Images/KP06.jpg',
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
    {
      id: 9,
      image: '../Images/KP07.jpg',
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
    {
      id: 10,
      image: '../Images/KP09.jpg',
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
    {
      id: 11,
      image: '../Images/KP10.jpg',
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
    {
      id: 12,
      image: '../Images/KP06.jpg',
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
    {
      id: 13,
      image: '../Images/KP03.jpg',
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
    {
      id: 14,
      image: '../Images/KP05.jpg',
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    }
  ];

  return (
    <section className="featured-listings-section" id="propiedades">
      <h2>Propiedades Destacadas</h2>
      <p className="section-description">Explora nuestra selección de los mejores inmuebles disponibles.</p>
      <div className="listings-grid">
        {listings.map(listing => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
      <button className="btn btn-outline view-all-btn">Ver todas las propiedades</button>
    </section>
  );
};

export default FeaturedListings;