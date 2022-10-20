import React from 'react'
import './pageResponsive.css';

const PageResponsive = () => {
    return (
        <>
            <div className="menuresposive" >
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
        </>
    )
}

export default PageResponsive