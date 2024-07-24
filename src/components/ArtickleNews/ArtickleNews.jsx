import './ArtickleNews.css'
import { FaLongArrowAltRight } from "react-icons/fa";

const ArtickleNews = () => {
  return (
    <>
       <section className="articlesNews">
      <div className="container">
        <h2 className="articlesNews__title">Articles & News</h2>
        <div className="articlesNews__subtitle">
          It is a long established fact that a reader will be distracted by the readable content <br />
          of a page when looking at its layout points of using. <br />
        </div>

        <div className="articlesNews__cards flex">
          <div className="articlesNews__card">
            <a href="#"><img src="../assets/img/design.png" alt="" /></a>
            <div className="articlesNews__cards__decoration">
              Kitchen Design
            </div>

            <h3 className="articlesNews__cards__title">
              Lets Get Solution For Building Construction Work
            </h3>

            <div className="dataLink__wrapper flex">
              <div className="articlesNews__cards__data">
                26 December,2022
              </div>

              <a href="#" className="card__arrow flex">
              <FaLongArrowAltRight />
              </a>
            </div>
          </div>

          <div className="articlesNews__card">
            <a href="#"><img src="../assets/img/design.png" alt="" /></a>
            <div className="articlesNews__cards__decoration">
              Kitchen Design
            </div>

            <h3 className="articlesNews__cards__title">
              Lets Get Solution For Building Construction Work
            </h3>

            <div className="dataLink__wrapper flex">
              <div className="articlesNews__cards__data">
                26 December,2022
              </div>

              <a href="#" className="card__arrow flex">
              <FaLongArrowAltRight />
              </a>
            </div>
          </div>

          <div className="articlesNews__card">
            <a href="#"><img src="../assets/img/design.png" alt="" /></a>
            <div className="articlesNews__cards__decoration">
              Kitchen Design
            </div>

            <h3 className="articlesNews__cards__title">
              Let’s Get Solution For Building Construction Work
            </h3>

            <div className="dataLink__wrapper flex">
              <div className="articlesNews__cards__data">
                26 December,2022
              </div>

              <a href="#" className="card__arrow flex">
              <FaLongArrowAltRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ArtickleNews
