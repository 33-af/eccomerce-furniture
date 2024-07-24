import './ProjectPlan.css'

const ProjectPlan = () => {
  return (
    <>
    <section className="readMore">
      <div className="container flex">
        <div className="readMore__column">
          <h3 className="readMore__title">Project Plan</h3>
          <div className="readMore__content">
            There are many variations of the <br />
            passages of lorem Ipsum from <br />
            available, majority. <br />
          </div>
          <a href="#" className="readMore__link">
            Read More <span className="arrow">&#8594;</span>
          </a>
        </div>

        <div className="readMore__column">
          <h3 className="readMore__title">Interior Work</h3>
          <div className="readMore__content">
            There are many variations of the <br />
            passages of lorem Ipsum from <br />
            available, majority. <br />
          </div>
          <a href="#" className="readMore__link">
            Read More <span className="arrow">&#8594;</span>
          </a>
        </div>

        <div className="readMore__column">
          <h3 className="readMore__title">Realization</h3>
          <div className="readMore__content">
            There are many variations of the <br />
            passages of lorem Ipsum from <br />
            available, majority. <br />
          </div>
          <a href="#" className="readMore__link">
            Read More <span className="arrow">&#8594;</span>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProjectPlan
