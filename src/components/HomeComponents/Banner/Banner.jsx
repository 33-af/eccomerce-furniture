
import './Banner.css'

const BannerTop = () => {
  return (
    <div className="citeContent">
      <section className="main">
        <div className="container">
          <h1 className="main__title">
            Let Your Home <br />
            Be Unique <br />
          </h1>
          <div className="main__subtitle">
            There are many variations of the passages of lorem Ipsum <br />
            from available, variations of the passages. <br />
          </div>
          <div className="btn grayBtn flex">
            Get Started <span className="arrow">&#8594;</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerTop