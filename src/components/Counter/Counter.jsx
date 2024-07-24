import './Counter.css'

const Counter = () => {
  return (
    <>
      <section className="counter">
      <div className="container flex">
        <div className="counter__item" data-target="12">
          <span className="counter__value">0</span>
          <div className="counter__item__text">
            Years Of Experience
          </div>
        </div>
        <div className="counter__item" data-target="85">
          <span className="counter__value">0</span>
          <div className="counter__item__text">
            Success Projects
          </div>
        </div>
        <div className="counter__item" data-target="15">
          <span className="counter__value">0</span>
          <div className="counter__item__text">
            Active Projects
          </div>
        </div>
        <div className="counter__item" data-target="95">
          <span className="counter__value">0</span>
          <div className="counter__item__text">
            Happy Customers
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Counter
