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
                    <a className="nav-link" aria-current="page" href="/locatairePage">Gestion des locataire</a>
                  </li>
                  <li>
                    <a className="nav-link" aria-current="page" href="/vehiculePage">Gestion des vehicule</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBare