import React, { useState } from 'react';
import './Service.scss';
import { useData } from "../../../context/DataContext";

const Services = () => {
  const { services } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(services.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = services.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="tour-listing-container">
      <header className="tour-listing-header">
        <nav>
          <ul>
            <li><a href="#date">Date</a></li>
            <li><a href="#price-low-to-high">Price Low To High</a></li>
            <li><a href="#price-high-to-low">Price High To Low</a></li>
            <li><a href="#name-a-z">Name (A-Z)</a></li>
          </ul>
        </nav>
      </header>

      <section className="tour-listing-content">
        <div className="tour-cards">
          {currentItems.map(({ id, img, time, member, price, rating, location }) => (
            <div key={id} className="tour-card active">
              <img src={img} alt={location} />
              <div className="tour-info">
                <p>{time}</p> 
                <p>{member}</p> 
                <h4>{location}</h4>
                <p>{price} <span className="rating">{rating}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <aside className="tour-plan">
        <h3>Plan Your Trip</h3>
        <form>
          <input type="text" placeholder="Search Tour" required />
          <input type="text" placeholder="Where To?" required />
          <input type="date" placeholder="Date" required />
          <div className="filter-by-price">
            <label>Filter By Price</label>
            <input type="range" min="12" max="3800" />
            <p>Price: $12 - $3800</p>
          </div>
          <button type="submit" className="btn">Book Now</button>
        </form>
      </aside>

      <footer className="pagination">
        <ul>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i + 1}>
              <a
                href="#!"
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default Services;
