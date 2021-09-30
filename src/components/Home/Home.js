import React from 'react';
import icon from '../../images/icon.png'
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="d-flex justify-content-center align-items-center text-white text-center bg-home">
                <img src={icon} alt="" />
                <div>
                    <h1>Welcome to TheMealDB</h1>
                    <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                        We also offer a free JSON API for anyone wanting to use it.
                        If you like the site, please consider supporting us on Patreon by clicking the link below...</p>
                </div>
                <img src={icon} alt="" />
            </div>
        </div>
    );
};

export default Home;