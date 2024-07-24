import './AboutUs.css'
import { PeopleAvatar } from '../../assets'; // Убедитесь, что вы импортируете правильный путь к аватару

const testimonials = [
  {
    name: "Nattasha Mith",
    residence: "Sydney, USA",
    content: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    avatar: PeopleAvatar // Используем импортированный аватар
  },
  {
    name: "Nattasha Mith",
    residence: "Sydney, USA",
    content: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    avatar: PeopleAvatar // Используем импортированный аватар
  },
  {
    name: "Nattasha Mith",
    residence: "Sydney, USA",
    content: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    avatar: PeopleAvatar // Используем импортированный аватар
  }
];

const TestimonialCard = ({ name, residence, content, avatar }) => (
  <div className="testimonial__card">
    <div className="peopleProfile flex">
      <div className="peopleProfile__avatar">
        <img src={avatar} alt={`${name}'s avatar`} />
      </div>
      <div className="peopleTextProfile">
        <div className="peopleTextProfile__name">
          {name}
        </div>
        <div className="peopleTextProfile__residence">
          {residence}
        </div>
      </div>
    </div>
    <div className="testimonial__card__content">
      {content}
    </div>
  </div>
);

const AboutUs = () => (
  <section className="testimonial">
    <div className="container">
      <h2 className="testimonial__title">
        What the People Thinks <br />
        About Us <br />
      </h2>
      <div className="testimonial__cards flex">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            residence={testimonial.residence}
            content={testimonial.content}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </div>
  </section>
);

export default AboutUs;