import React from 'react';
import './GarageDoors.css'; // Импортирайте CSS файла
import logo from '../assets/images/garage-logo.png'; // Лого
import sectional from '../assets/images/garajni-sekcionni.jpg'; // Секционни врати
import rollup from '../assets/images/garajni-roletni.jpg'; // Ролетни врати
import berry from '../assets/images/garajni-berry.jpg'; // Гаражни врати Berry
import kolona from '../assets/images/garajni-vrati.png'; // Колона с текст

function GarageDoors() {
  return (
    <div className="garage-doors-page">
      {/* Горно меню */}

      {/* Заглавна секция */}
      <div className="header-section">
        <div className="container">
          <h1>Гаражни врати</h1>
          <h2>АВТОМАТИЧНИ ГАРАЖНИ ВРАТИ ХЬОРМАН</h2>
        </div>
      </div>

      {/* Секция с информация за вратите */}
      <div className="doors-info-section">
        <div className="container">
          <p>
            Многообразието от автоматични гаражни врати на Хьорман и Делис Ви предоставя богат избор в търсенето на най-правилното решение за Вашия гараж.
            Вратите се движат плавно, прецизно и безшумно, а патентованият механизъм против влизане с взлом премахва всяко притеснение.
            В зависимост от мястото и отвора на гаража можете да изберете най-подходящия за Вас вид врата за гараж: гаражна секционна врата, гаражна ролетна врата или гаражна врата с въртеливо-постъпателен ход - гаражна врата Berry.
            Модерни и елегантни, гаражните врати Hörmann Ви осигуряват спокойствие и сигурност, както и лесен автоматизиран достъп до Вашия гараж.
            Поради голямото разнообразие на цветове, материали, дизайни и технологии в нашия каталог можете да видите "гаражни врати на цени от", които да Ви послужат за ориентир.
            В случай, че желаете конкретна оферта можете да се свържете с нас и ще Ви предоставим точна цена за избраната от Вас гаражна врата Хьорман.
          </p>
        </div>
      </div>

      {/* Секция с гаранции и информация за фирмата */}
      <div className="guarantees-info-section">
  <div className="container">
    <div className="guarantee-item"> {/* Wrap each item in a div */}
      <div className="guarantee-content"> {/* Add a div for content */}
        <h3>ГАРАНТИРАНО КАЧЕСТВО ОТ ГЕРМАНИЯ</h3>
        <p>Автоматичните гаражни врати с марка Hörmann се проектират и произвеждат във високо специализирани заводи.</p>
      </div>
    </div>
    <div className="guarantee-item"> {/* Wrap each item in a div */}
      <div className="guarantee-content"> {/* Add a div for content */}
        <h3>ПРОДУКТИ ЗА ПОКОЛЕНИЯ НАРЕД</h3>
        <p>За създаването на технически усъвършенствани серийни гаражни врати с качеството на Hörmann се провеждат продължителни тестове.</p>
      </div>
    </div>
    <div className="guarantee-item"> {/* Wrap each item in a div */}
      <div className="guarantee-content"> {/* Add a div for content */}
        <h3>ОРИЕНТИРАНИ КЪМ БЪДЕЩЕТО</h3>
        <p>Фирма Hörmann, Германия е една от водещите фирми за производство на гаражни врати в Европа и в света.</p>
      </div>
    </div>
  </div>
</div>

<div className="sectional-doors-info">
  <div className="container">
    <div className="image-container">
      <img src={sectional} alt="Секционни гаражни врати" />
    </div>
    <div className="text-container">
      <h2>СЕКЦИОННИ ГАРАЖНИ ВРАТИ</h2>
      <p>
        Секционните гаражни врати са един от най-предпочитаните сред всички видове врати за гараж. Благодарение на своята конструкция те предлагат пълно удобство и оптимално спестяване на пространство в и пред гаража.
        Всички гаражни секционни врати се отварят вертикално и са разположени под тавана. Могат да бъдат монтирани във всеки отвор на гараж, а по-голямата ширина на светлия отвор с до цели 14см. ви позволява да влизате и излизате от гаража си по-удобно. Освен това те са оптимално уплътнени от четирите страни с трайно еластични и устойчиви на атмосферни влияния уплътнения. Автоматика "ДЕЛИС" Ви предлага гаражни секционни врати на Hörmann, проектирани за Вас.
      </p>
      <div className="buttons-container">
        <button>Информация</button>
        <button>Към продукти</button>
      </div>
    </div>
  </div>
</div>
<div className="rollup-doors-info">
  <div className="container">
    <div className="image-container">
      <img src={rollup} alt="Ролетни гаражни врати" />
    </div>
    <div className="text-container">
      <h2>РОЛЕТНИ ГАРАЖНИ ВРАТИ</h2>
      <p>
        „Автоматика ДЕЛИС" предлага на своите клиенти ролетни гаражни врати с безупречно качество. Този вид гаражни врати се прибират под тавана и се разгъват вертикално. Те не се нуждаят от място в гаража. Благодарение на конструкцията си ролетните гаражни врати предлагат максимално място в и пред гаража. Формата на отвора на гаража не е от значение при монтажа. Независимо дали е правоъгълна, скосена, със сегментов или дъгообразен свод.
      </p>
      <div className="buttons-container">
        <button>Информация</button>
        <button>Към продукти</button>
      </div>
    </div>
  </div>
</div>

<div className="rollup-doors-info">
  {/* ... (информация за ролетни врати) ... */}
</div>

{/* Нова секция за информация за гаражни врати Berry */}
<div className="berry-doors-info">
  <div className="container">
    <div className="image-container">
      <img src={berry} alt="Гаражни врати Berry" />
    </div>
    <div className="text-container">
      <h2>ГАРАЖНИ ВРАТИ BERRY</h2>
      <p>
        „Автоматика ДЕЛИС" Ви предлага гаражни врати Веггу с въртеливо-постъпателен ход от Нотапи. Този вид гаражни врати съчетават високото качество и усъвършенстваната техника германската марка Ногтапи за дълготрайна и безопасна употреба, приятен външен вид и комфорт. В онлайн каталога на „Автоматика ДЕЛИС" ще намерите врати Вerry c въртеливо-постъпателен ход множество атрактивни стоманени или дървени мотиви, с обшивка на линии или на касети, в разнообразни цветовете и декорирани повърхности.
      </p>
      <div className="buttons-container">
        <button>Информация</button>
        <button>Към продукти</button>
      </div>
    </div>
  </div>
</div>

<div class="comfort-security-info">
    <div class="container">
        <div class="image-container">
            <img src={kolona} alt="Удобство и сигурност" />
        </div>
        <div class="text-container">
            <h2>Удобство и сигурност за Вашия дом</h2>
            <p>
                Описание на удобствата и сигурността, които предлагат вашите продукти.
                Можете да добавите текст за автоматизация, сигурност, изолация и други предимства.
            </p>
            {/* Можете да добавите бутони или други елементи тук, ако е необходимо */}
        </div>
    </div>
</div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Delice.bg Logo" />
          </div>
          <div className="footer-contact">
            <span className="phone-number">
              <img src="https://img.icons8.com/?size=100&id=13616&format=png&color=000000" alt="phone icon" className="phone-icon" />
              +359 888 819 611
            </span>
            <div className="footer-social">
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="facebook" />
              </a>
              <a href="https://instagram.com">
                <img src="https://img.icons8.com/?size=100&id=85154&format=png&color=228BE6" alt="Instagram" style={{ width: '20px', height: '20px' }} />
              </a>
            </div>
          </div>
          <nav className="footer-nav">
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
            <a href="#">COOKIE POLICY (EU)</a>
            <a href="#">PRIVACY STATEMENT (EU)</a>
            <a href="#">DISCLAIMER</a>
            <a href="#">ГАРАНЦИОННИ УСЛОВИЯ</a>
          </div>
          <div className="footer-copyright">
            <p>Всички права запазени.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GarageDoors;