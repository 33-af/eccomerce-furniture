import { useEffect } from 'react';
import './Counter.css'

const Counter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter__item');

    counters.forEach(counter => {
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.querySelector('.counter__value').innerText;
        const increment = target / 200; 

        if (count < target) {
          counter.querySelector('.counter__value').innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 20);
        } else {
          counter.querySelector('.counter__value').innerText = target;
        }
      };
      updateCounter();
    });
  }, []);

  return (
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
  );
};

export default Counter;