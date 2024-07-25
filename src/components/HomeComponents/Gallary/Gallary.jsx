import './Gallary.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { ProjectPhoto_1 } from '../../../assets';

const Gallary = () => {
  return (
    <>
      <section className="gallery">
        <div className="container">
          <h2 className="gallery__title">Follow Our Projects</h2>
          <div className="gallery__subtitle">
            It is a long established fact that a reader will be distracted by the readable <br />
            content of a page looking at its layout points. <br />
          </div>
          <div className="gallery__cards flex">
            <div className="gallery__card">
              <a href="#"><img src={ProjectPhoto_1} alt="Project 1" /></a>
              <div className="gallery__card__content flex">
                <div className="gallery__card__text__content">
                  <div className="gallery__card__modern">Modern Kitchen</div>
                  <div className="gallery__card__decor">Decor / Architecture</div>
                </div>
                <a href="#" className="card__arrow flex"><FaLongArrowAltRight /></a>
              </div>
            </div>
            <div className="gallery__card">
              <a href="#"><img src={ProjectPhoto_1} alt="Project 2" /></a>
              <div className="gallery__card__content flex">
                <div className="gallery__card__text__content">
                  <div className="gallery__card__modern">Modern Kitchen</div>
                  <div className="gallery__card__decor">Decor / Architecture</div>
                </div>
                <a href="#" className="card__arrow flex"><FaLongArrowAltRight /></a>
              </div>
            </div>
            <div className="gallery__card">
              <a href="#"><img src={ProjectPhoto_1} alt="Project 3" /></a>
              <div className="gallery__card__content flex">
                <div className="gallery__card__text__content">
                  <div className="gallery__card__modern">Modern Kitchen</div>
                  <div className="gallery__card__decor">Decor / Architecture</div>
                </div>
                <a href="#" className="card__arrow flex"><FaLongArrowAltRight /></a>
              </div>
            </div>
            <div className="gallery__card">
              <a href="#"><img src={ProjectPhoto_1} alt="Project 4" /></a>
              <div className="gallery__card__content flex">
                <div className="gallery__card__text__content">
                  <div className="gallery__card__modern">Modern Kitchen</div>
                  <div className="gallery__card__decor">Decor / Architecture</div>
                </div>
                <a href="#" className="card__arrow flex"><FaLongArrowAltRight /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallary
