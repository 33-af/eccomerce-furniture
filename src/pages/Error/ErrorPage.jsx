import { Link } from 'react-router-dom';
import './ErrorPage.css'
import { Error_Page } from '../../assets';

const ErrorPage = () => {
    return (
      <div className="citeContent">
        <div className="fail404">
          <div className="container flex">
            <div className="fail404__left">
              <div className="fail404__text">404</div>
              <div className="fail404__subtitle">
                We are sorry, but the page <br />
                you requested was not found <br />
              </div>
              <Link to="/" className="fail404__btn btn grayBtn">
                Back To Home <span className="arrow">&#8594;</span>
              </Link>
            </div>
            <div className="fail404__right">
              <img src={Error_Page} alt="404" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ErrorPage;