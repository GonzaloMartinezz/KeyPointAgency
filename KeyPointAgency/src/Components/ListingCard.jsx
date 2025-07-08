// src/components/FeaturedListings/ListingCard.js
import React from 'react';
import './FeaturedListings.css'; // Mismo CSS para la tarjeta

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
      image: 'https://source.unsplash.com/random/800x600/?house,modern',
      title: 'Casa Familiar con Jardín',
      location: 'Palermo, Buenos Aires',
      price: '$350.000',
      type: 'Venta'
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random/800x600/?apartment,city',
      title: 'Departamento Céntrico con Balcón',
      location: 'Recoleta, Buenos Aires',
      price: '$1.200/mes',
      type: 'Alquiler'
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/random/800x600/?house,luxury',
      title: 'Villa de Lujo con Piscina',
      location: 'Pilar, Buenos Aires',
      price: '$850.000',
      type: 'Venta'
    },
    {
      id: 4,
      image: 'https://source.unsplash.com/random/800x600/?apartment,cozy',
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