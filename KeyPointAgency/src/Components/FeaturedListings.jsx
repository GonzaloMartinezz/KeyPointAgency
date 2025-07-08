// src/components/FeaturedListings/ListingCard.js
import React from 'react';
import '../Styles/FeaturedListings.css'; 
import imgagency from '../Images/KP03.jpg';
import imgagency1 from '../Images/KP04.jpg';
import imgagency2 from '../Images/KP05.jpg';
import imgagency3 from '../Images/KP06.jpg';
import imgagency4 from '../Images/KP07.jpg';
import imgagency5 from '../Images/KP08.jpg';
import imgagency6 from '../Images/KP09.jpg';
import imgagency7 from '../Images/KP03.jpg';
import imgagency8 from '../Images/KP04.jpg';


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

const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      image: imgagency,
      title: 'Casa Familiar con Jardín',
      location: 'Palermo, Buenos Aires',
      price: '$350.000',
      type: 'Venta'
    },
    {
      id: 2,
      image: imgagency1,
      title: 'Departamento Céntrico con Balcón',
      location: 'Recoleta, Buenos Aires',
      price: '$1.200/mes',
      type: 'Alquiler'
    },
    {
      id: 3,
      image: imgagency2,
      title: 'Villa de Lujo con Piscina',
      location: 'Pilar, Buenos Aires',
      price: '$850.000',
      type: 'Venta'
    },
    {
      id: 4,
      image: imgagency3,
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
      {
      id: 5,
      image: imgagency4,
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
      {
      id: 6,
      image: imgagency5,
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
      {
      id: 7,
      image: imgagency6,
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
      {
      id: 8,
      image: imgagency7,
      title: 'Loft Moderno en Barrio Norte',
      location: 'Barrio Norte, Buenos Aires',
      price: '$950/mes',
      type: 'Alquiler'
    },
       {
      id: 8,
      image: imgagency8,
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