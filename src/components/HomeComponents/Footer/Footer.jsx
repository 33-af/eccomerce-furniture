import './Footer.css'
import { Logo, Facebook, Twitter, In, Instagram} from '../../../assets/index'

const Footer = () => {
  return (
      <footer className="footer">
          <div className="container">
              <div className="footer__columns">
                  <div className="footer__column">
                      <img src={Logo} alt="" className="logo anim-items" />
                      <div className="footer__subtitle anim-items">
                          It is a long established fact that a reader <br />
                          will be distracted lookings. <br />
                      </div>
                      <div className="footer__socials anim-items">
                          <a href="#" className="footer__social">
                              <img src={Facebook} alt="Facebook" />
                          </a>
                          <a href="#" className="footer__social">
                              <img src={Twitter} alt="Twitter" />
                          </a>
                          <a href="#" className="footer__social">
                              <img src={In} alt="LinkedIn" />
                          </a>
                          <a href="#" className="footer__social">
                              <img src={Instagram} alt="Instagram" />
                          </a>
                      </div>
                  </div>

                  <div className="footer__column">
                      <div className="footer__column__title anim-items">Pages</div>
                      <a href="#" className="footer__column__nav anim-items">About Us</a>
                      <a href="#" className="footer__column__nav anim-items">Our Projects</a>
                      <a href="#" className="footer__column__nav anim-items">Our Team</a>
                      <a href="#" className="footer__column__nav anim-items">Contact Us</a>
                      <a href="#" className="footer__column__nav anim-items">Services</a>
                  </div>

                  <div className="footer__column">
                      <div className="footer__column__title anim-items">Services</div>
                      <a href="#" className="footer__column__nav anim-items">Kitchen</a>
                      <a href="#" className="footer__column__nav anim-items">Living Area</a>
                      <a href="#" className="footer__column__nav anim-items">Bathroom</a>
                      <a href="#" className="footer__column__nav anim-items">Dining Hall</a>
                      <a href="#" className="footer__column__nav anim-items">Bedroom</a>
                  </div>

                  <div className="footer__column">
                      <div className="footer__column__title anim-items">Contact</div>
                      <a href="#" className="footer__column__nav anim-items">
                          55 East Birchwood Ave. <br />
                          Brooklyn, New York 11201 <br />
                      </a>
                      <a href="mailto:contact@interno.com" className="footer__column__nav anim-items">contact@interno.com</a>
                      <a href="tel:(123) 456 - 7890" className="footer__column__nav anim-items">(123) 456 - 7890</a>
                  </div>
              </div>
          </div>
          <div className="copyright anim-items">
              Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
          </div>
      </footer>
  );
}

export default Footer;