import React from 'react';
import localib from '../assets/localib.png';
import './NavBare.css';

const NavBare = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navBarLocalib">
          <ul className='imgEtTitre'>
            <li>
              <a className="imgRouter" href="/">
                <img src={localib} alt="" />
              </a>
            </li>
            <li>
              <div className="menu" >
                <ul>
                  <li>
                    <a className="nav-link" aria-current="page" href="/locatairePage">Gestion des locataires</a>
                  </li>
                  <li>
                    <a className="nav-link" aria-current="page" href="/vehiculePage">Gestion des véhicules</a>
                  </li>
                  <li>
                    <a className="nav-link" aria-current="page" href="/locationPage">Gestion des locations</a>
                  </li>
                  <li>
                    <a className="nav-link" aria-current="page" href="/locationVehiculePage">Locations des véhicules</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <nav className='responsive'>
        <div className="navBarresp">
          <ul className='imgEtTitreresp'>
            <li>
              <a className="imgRouterresp" href="/">
                <img src={localib} alt="" />
              </a>
            </li>
            <li className='menuresp'>
              <a href="/pageResponsive"> <i className="bi bi-three-dots"></i></a>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default NavBare