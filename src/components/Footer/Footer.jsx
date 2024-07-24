import './Footer.css'
import { Logo, Facebook, Twitter, In, Instagram } from '../../assets/index'

const Footer = () => {
  return (
  
          <footer className="footer">
            <div className="container">
              <div className="footer__columns flex">
                <div className="footer__column">
                  <img src={Logo} alt="Logo" className="logo" />
                  <div className="footer__subtitle">
                    It is a long established fact that a reader <br />
                    will be distracted lookings. <br />
                  </div>
                  <div className="footer__socials flex">
                    <a href="#" className="footer__social"><img src={Facebook} alt="Facebook" /></a>
                    <a href="#" className="footer__social"><img src={Twitter} alt="Twitter" /></a>
                    <a href="#" className="footer__social"><img src={In} alt="LinkedIn" /></a>
                    <a href="#" className="footer__social"><img src={Instagram} alt="Instagram" /></a>
                  </div>
                </div>
      
                <div className="footer__column flex">
                  <div className="footer__column__title">
                    Pages
                  </div>
                  <a href="#" className="footer__column__nav">
                    About Us
                  </a>
                  <a href="#" className="footer__column__nav">
                    Our Projects
                  </a>
                  <a href="#" className="footer__column__nav">
                    Our Team
                  </a>
                  <a href="#" className="footer__column__nav">
                    Contact Us
                  </a>
                  <a href="#" className="footer__column__nav">
                    Services
                  </a>
                </div>
      
                <div className="footer__column flex">
                  <div className="footer__column__title">
                    Services
                  </div>
                  <a href="#" className="footer__column__nav">
                    Kitchen
                  </a>
                  <a href="#" className="footer__column__nav">
                    Living Area
                  </a>
                  <a href="#" className="footer__column__nav">
                    Bathroom
                  </a>
                  <a href="#" className="footer__column__nav">
                    Dining Hall
                  </a>
                  <a href="#" className="footer__column__nav">
                    Bedroom
                  </a>
                </div>
      
                <div className="footer__column flex">
                  <div className="footer__column__title">
                    Contact
                  </div>
                  <a href="#" className="footer__column__nav">
                    55 East Birchwood Ave. <br />
                    Brooklyn, New York 11201 <br />
                  </a>
                  <a href="#" className="footer__column__nav">
                    contact@interno.com
                  </a>
                  <a href="#" className="footer__column__nav">
                    (123) 456 - 7890
                  </a>
                </div>
              </div>
            </div>
            <div className="copyright">
              Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
            </div>
          </footer>
        
  )
}

export default Footer
