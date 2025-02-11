import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      {/* Горна лента с контакти и социални мрежи */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="facebook" />
            </a>
            <span className="phone-number">
              <img src="https://img.icons8.com/?size=100&id=13616&format=png&color=000000" alt="phone icon" className="phone-icon" />
              +359 888 819 611
            </span>
          </div>
          <ul className="top-menu">
            <li><Link className="nav-link" to="/">Начало</Link></li>
            <li><Link className="nav-link" to="/about">За нас</Link></li>
            <li><Link className="nav-link" to="/contact">Контакти</Link></li>
          </ul>
        </div>
      </div>

      {/* Основна навигация */}
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-menu">
            {/* Име на сайта като линк към началната страница */}
            <li><Link className="site-name" to="/">Моят Сайт</Link></li>
            <div className="navbar-links">
              <li><Link className="nav-link" to="/pages/GarageDoors">Гаражни врати</Link></li>
              <li><Link className="nav-link" to="/entrance-doors">Входни врати</Link></li>
              <li><Link className="nav-link" to="/interior-doors">Интериорни врати</Link></li>
              <li><Link className="nav-link" to="/industrial-doors">Индустриални врати</Link></li>
              <li><Link className="nav-link" to="/automation">Автоматика</Link></li>
              <li><Link className="nav-link promo" to="/promotions">Промоции</Link></li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
