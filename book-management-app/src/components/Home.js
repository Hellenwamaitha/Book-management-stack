import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookCarousel() {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    // Fetch book data from the external API when the component mounts
    axios.get('https://www.googleapis.com/books/v1/volumes?q={search_query}&key={api_key}&maxResults={max_results}')
      .then((response) => {
        // Assuming the API returns an array of book objects
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching book data:', error);
      });
  }, []);

  const toggleFavorite = (bookId) => {
    // Check if the book is already in favorites
    if (favorites.has(bookId)) {
      // Remove the book from favorites
      favorites.delete(bookId);
    } else {
      // Add the book to favorites
      favorites.add(bookId);
    }
    setFavorites(new Set(favorites));
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {books.map((book, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="card">
              <img src={book.image} alt={book.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <button
                  className={`btn ${favorites.has(book.id) ? 'btn-danger' : 'btn-primary'}`}
                  onClick={() => toggleFavorite(book.id)}
                >
                  {favorites.has(book.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default BookCarousel;
