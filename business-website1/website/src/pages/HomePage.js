import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Импортиране на CSS за HomePage
import sectional1 from '../assets/images/garage1.png';
import sectional2 from '../assets/images/garage2.jpg';
import sectional3 from '../assets/images/garage3.jpg';
import rollup1 from '../assets/images/roll3.png';
import rollup2 from '../assets/images/roll3.png';
import rollup3 from '../assets/images/roll3.png';
import berry1 from '../assets/images/berry1.jpg';
import berry2 from '../assets/images/berry2.jpg';
import berry3 from '../assets/images/berry3.jpg';
import garage from '../assets/images/garage-kola.jpg';
import collage2 from '../assets/images/HORMANN.jpg';
import collage3 from '../assets/images/hoermann02.jpg';
import logo from '../assets/images/garage-logo.png';

function HomePage() {
    const [activeCategory, setActiveCategory] = useState('sectional');
    const [categoryInfo, setCategoryInfo] = useState({
        title: "Гаражни врати",
        subtitle: "Секционни гаражни врати",
        description: "Многообразието от автоматични гаражни врати на Хьорман Ви предоставя богат избор в търсенето на най-правилното решение за Вашия гараж. Секционните гаражни врати са един от най-предпочитаните сред всички видове врати за гараж."
    });
    const [animate, setAnimate] = useState(false);
    const [imageUrl, setImageUrl] = useState("URL_НА_СНИМКАТА"); // Инициализираме URL адреса на изображението

    const doorsImages = {
        sectional: [
            { img: sectional1, title: "Секционна врата 1", price: "Цена: 1500 лв.", description: "Това е секционна врата с високо качество и отлична изолация." },
            { img: sectional2, title: "Секционна врата 2", price: "Цена: 1600 лв.", description: "Подходяща за големи гаражи и с висока устойчивост." },
            { img: sectional3, title: "Секционна врата 3", price: "Цена: 1700 лв.", description: "Модерна и стилна секционна врата, перфектна за всякакъв тип гаражи." }
        ],
        rollup: [
            { img: rollup1, title: "Ролетна врата 1", price: "Цена: 1200 лв.", description: "Ролетна врата, идеална за малки гаражи и складови помещения." },
            { img: rollup2, title: "Ролетна врата 2", price: "Цена: 1300 лв.", description: "Издръжлива и лесна за употреба ролетна врата." },
            { img: rollup3, title: "Ролетна врата 3", price: "Цена: 1400 лв.", description: "Тази ролетна врата предлага сигурност и удобство." }
        ],
        berry: [
            { img: berry1, title: "Гаражна врата Berry 1", price: "Цена: 1800 лв.", description: "Прекрасна врата от Berry с висококачествени материали." },
            { img: berry2, title: "Гаражна врата Berry 2", price: "Цена: 1900 лв.", description: "Гаражна врата с луксозен външен вид и отлични термични свойства." },
            { img: berry3, title: "Гаражна врата Berry 3", price: "Цена: 2000 лв.", description: "Подходяща за всички видове гаражи, с висока изолация и сигурност." }
        ]
    };

    const categoryData = {
        sectional: {
            title: "Гаражни врати",
            subtitle: "Секционни гаражни врати",
            description: "Многообразието от автоматични гаражни врати на Хьорман Ви предоставя богат избор в търсенето на най-правилното решение за Вашия гараж. Секционните гаражни врати са един от най-предпочитаните сред всички видове врати за гараж."
        },
        rollup: {
            title: "Гаражни врати",
            subtitle: "Ролетни гаражни врати",
            description: "Ролетните гаражни врати са изключително практични и удобни за малки пространства. Те предлагат висока сигурност и лесна употреба."
        },
        berry: {
            title: "Гаражни врати",
            subtitle: "Гаражни врати Berry",
            description: "Гаражните врати Berry са известни със своята висока издръжливост и естетически вид. Те са перфектни за всеки тип гараж и предлагат отлична изолация."
        }
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setCategoryInfo(categoryData[category]);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000); // Намалена скорост на анимацията
    };

    useEffect(() => {
        // Проверяваме дали URL адресът е валиден
        if (imageUrl) {
            // Зареждаме изображението и го показваме
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
                // След като изображението е заредено, можем да го покажем
                console.log("Image loaded successfully");
            };
            img.onerror = () => {
                // Ако има грешка при зареждането на изображението, показваме съобщение за грешка
                console.error("Error loading image");
                setImageUrl("URL_КЪМ_ДРУГО_ИЗОБРАЖЕНИЕ"); // Можем да зададем друг URL адрес или да скрием изображението
            };
        }
    }, [imageUrl]); // Използваме imageUrl като зависимост, за да се изпълни ефекта при промяна на URL адреса

    return (
        <div>
            {/* Секция с фоново изображение и текст */}
            <div className="hero-section">
                <div className="hero-overlay">
                    <h2>Добре дошли в моят сайт!</h2>
                    <p className="hero-description">Вашето място за висококачествени врати и автоматизация</p>
                </div>
            </div>

            {/* Основно съдържание на началната страница */}
            <div className="home-page">
                <h1>Добре дошли в моят сайт!</h1>
                <p>Това е началната страница на сайта. Тук ще намерите най-добрите врати за вашия дом или бизнес.</p>
            </div>

            {/* Заглавие и подзаглавие секция */}
            <div className={`header-cc flex items-center ${animate ? 'slide-in' : ''}`}>
                <div className="left-section left-fl">
                    <div className="cc-title-wrap flex">
                        <svg className="icon">
                            <use xlinkHref="#lines"></use>
                        </svg>
                        <h2 className="cc-main-title fw-medium">{categoryInfo.title}</h2>
                    </div>
                    <h2 className="cc-subtitle fw-medium">{categoryInfo.subtitle}</h2>
                </div>
                <div className="right-section right-fl">
                    <p className="cat-description">{categoryInfo.description}</p>
                </div>
            </div>

            {/* Секция с категории и изображения */}
            <div className="content-cc">
    <div className="nav-cc">
        <div
            className={`nav-item ${activeCategory === 'sectional' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('sectional')}
        >
            <svg className="icon">
                <use xlinkHref="#cat_section"></use>
            </svg>
            <h4 className="nav-title">Секционни гаражни врати</h4>
        </div>
        <div
            className={`nav-item ${activeCategory === 'rollup' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('rollup')}
        >
            <svg className="icon">
                <use xlinkHref="#cat_rollup"></use>
            </svg>
            <h4 className="nav-title">Ролетни гаражни врати</h4>
        </div>
        <div
            className={`nav-item ${activeCategory === 'berry' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('berry')}
        >
            <svg className="icon">
                <use xlinkHref="#cat_berry"></use>
            </svg>
            <h4 className="nav-title">Гаражни врати Berry</h4>
        </div>
    </div>
    <div className="door-images">
        {activeCategory && (
            <div className="door-images-gallery">
                {doorsImages[activeCategory].map((door, index) => (
                    <div className="door-item" key={index}>
                        <img
                            src={door.img}
                            alt={`${activeCategory} door ${index + 1}`}
                            className="door-image"
                        />
                        <div className="door-info">
                            <h3>{door.title}</h3>
                            <p className="price">{door.price}</p>
                            <p className="description">{door.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
</div>
                        
                        
                            {/* Бутон за всички продукти */}
                            <div className="cc-cat-link">
                                <div className="main-button">
                                    <Link to="/products" className="see-more">
                                        <span className="button-label">Виж всички продукти</span>
                                        <svg className="icon">
                                            <use xlinkHref="#arrow"></use>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        
                            {/* Custom Section */}
                            <div className="custom-section">
                                <div className="custom-section-content">
                                    <div class="image-container">
                                    <img src={garage} alt="Background" class="background-image" />
                                    </div>
                                    <div className="text-content">
                                        <div className="wpb_single_image wpb_content_element vc_align_left">
                                            <figure className="wpb_wrapper vc_figure">
                                                <div className="vc_single_image-wrapper">
                                                    <img src="https://delice.bg/wp-content/uploads/2019/03/shield-1.png" className="vc_single_image-img attachment-full" alt="" title="shield (1)" />
                        </div>
                    </figure>
                </div>
                <p>Удобство и сигурност за Вашия дом!</p>
            </div>
        </div>
    </div>

{/* Нов ред с информация и бутон */}
<div className="info-section">
            <div className="info-content">
                <div className="image-container">
                    <img src={collage2} alt="Hörmann Product" className="info-image" />
                    <img src={collage3} alt="Hörmann Garage" className="info-image" />
                </div>
                <div className="text-content">
                    <h2>Заглавие на информацията</h2>
                    <p>
                        Тук можете да поставите текста на информацията, която искате да покажете.
                    </p>
                    <div className="button-container">
                        <Link to="/about-us" className="about-us-button">
                            За нас
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Поставете логото си тук */}
          <img src={logo} alt="Your Logo" /> 
        </div>
        <div className="footer-contact">
          {/* Информация за контакт */}
          <span className="phone-number">
              <img src="https://img.icons8.com/?size=100&id=13616&format=png&color=000000" alt="phone icon" className="phone-icon" />
              +359 888 819 611
            </span>
          <div className="footer-social">
            {/* Икони за социални мрежи */}
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="facebook" />
            </a>
            <a href="https://instagram.com">
              <img src="https://img.icons8.com/?size=100&id=85154&format=png&color=228BE6" alt="Instagram" style={{ width: '20px', height: '20px' }} /></a>
          </div>
        </div>
        <nav className="footer-nav">
          {/* Навигационно меню */}
          <ul>
            <li><a href="#">ГАРАЖНИ ВРАТИ</a></li>
            <li><a href="#">ВХОДНИ ВРАТИ</a></li>
            <li><a href="#">ИНТЕРИОРНИ ВРАТИ</a></li>
            <li><a href="#">ИНДУСТРИАЛНИ ВРАТИ</a></li>
            <li><a href="#">АВТОМАТИКА</a></li>
            <li><a href="#">СПЕЦИАЛНИ ПРЕДЛОЖЕНИЯ</a></li>
            <li><a href="#">НАМАЛЕНИ ПРОДУКТИ</a></li>
          </ul>
        </nav>
        <div className="footer-links">
          {/* Допълнителни връзки */}
          <a href="#">COOKIE POLICY (EU)</a>
          <a href="#">PRIVACY STATEMENT (EU)</a>
          <a href="#">DISCLAIMER</a>
          <a href="#">ГАРАНЦИОННИ УСЛОВИЯ</a>
        </div>
        <div className="footer-copyright">
          {/* Авторски права */}
          <p>Всички права запазени.</p>
        </div>
      </div>
    </footer>
 </div>


 );
}

export default HomePage;