import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import Booking from './Booking.jsx'
const apiKey = "dc257a8c2ef798fb12418cbc5957ce9c";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const fetchMovieDetail = async () => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
      const data = await res.json();
      setMovie(data);
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    fetchMovieDetail();
  }, [id]);
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleBookingSubmit = (bookingData) => {
    console.log("Submitted ", bookingData);
    handleCloseModal();
    //here we can handle like send to the server data
  };


  return (
    <div>
        <center><h1>styling nahi ki</h1></center>
      <h1>{movie.title}</h1>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
        style={{ width: '300px', height: '350px' }} 
      />
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:{movie.vote_average}</strong></p> 
      <center><button onClick={handleOpenModal} style={{height:'fit-content' , width:'300px', height:'50px',background:'cyan'}}>Book Now</button></center>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Booking Form"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h2>Booking Form</h2>
        <Booking onSubmit={handleBookingSubmit} />
        <button onClick={handleCloseModal}>Close</button>
       </Modal>
      
    </div>
  );
}

