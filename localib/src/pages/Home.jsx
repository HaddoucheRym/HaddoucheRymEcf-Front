import React from 'react'
import './home.css';
import voiture from '../assets/audi.jpg';

const Home = () => {
  return (
    <>
      <div className='home'>Bienvenue sur localib application</div>
      <div className='imgDiv'>
        <img src={voiture} alt="" />
      </div>
    </>
  )
}

export default Home