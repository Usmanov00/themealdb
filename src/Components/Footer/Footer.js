import React from 'react';
import UK from '../../assets/images/UK.png'
import TheCocktailDB from '../../assets/images/logo-tcdb.png'
import TheAudioDB from '../../assets/images/logo-tadb.png'
import TheSportsDB from '../../assets/images/logo-tsdb.png'

const Footer = () => {
  return (
    <div className="footer">
      <hr/>
      <div className="footer-container">
        <div className="container ">
          <div className="footer-box">
            <div className="copyright">
              <p>© 2022 TheMealDB</p>
              <div className="copyright-box">
                <p>Proudly built in the UK</p>
                <img src={UK} alt=""/>
              </div>
            </div>
            <div className="footer-links">
              <img src={TheCocktailDB} alt=""/>
              <img src={TheAudioDB} alt=""/>
              <div className="footer-link">
                <img src={TheSportsDB} alt=""/>
              </div>
            </div>
            <ul className="footer-info">
              <li>
                <a href="https://www.themealdb.com/about.php">
                  About
                </a>
              </li>
              <li>
                <a href="https://www.themealdb.com/faq.php">
                  Faq
                </a>
              </li>
              <li>
                <a href="https://www.themealdb.com/contact.php">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;