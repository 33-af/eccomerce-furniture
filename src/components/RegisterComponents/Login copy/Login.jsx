import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { auth } from '../../../utils/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/profile');
    } catch (error) {
      console.error('Ошибка входа:', error.message);
    }
  };

  return (
    <div className="createAccount ">
      <div className="container_register">
        <h1>Create Account</h1>
        <div className="createAccount__singInText">
          Already have an account?
          <Link to='/signIn'>Sign In</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='createAccount__registrationForm flex'>
          <input
            type="text"
            className='createAccount__input'
            placeholder="First Name*"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}

          <input
            type="text"
            className='createAccount__input'
            placeholder="Last Name*"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}

          <input
            type="email"
            className="createAccount__input"
            placeholder="Email Address*"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <input
            type="password"
            className="createAccount__input"
            placeholder="Password*"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <div className="birthdayForm">
            <div className="birthdayForm__title">
              Date of birth (DD/MM/YYYY)*
            </div>
            <div className="birthdayForm__inputsWrapper flex">
              <input
                type="number"
                className="birthdayInput"
                min="1"
                max="31"
                placeholder="DD"
                {...register("day", { required: "Day is required" })}
              />
              {errors.day && <span>{errors.day.message}</span>}

              <div>/</div>

              <input
                type="number"
                className="birthdayInput"
                min="1"
                max="12"
                placeholder="MM"
                {...register("month", { required: "Month is required" })}
              />
              {errors.month && <span>{errors.month.message}</span>}

              <div>/</div>

              <input
                type="number"
                className="birthdayInput"
                min="1900"
                max="2024"
                placeholder="YYYY"
                {...register("year", { required: "Year is required" })}
              />
              {errors.year && <span>{errors.year.message}</span>}
            </div>
          </div>

          <div className="checkboxForm">
            <div className="checkbox-container flex">
              <input
                type="checkbox"
                className="checkboxInput"
                {...register("acceptTerms", { required: "You must accept the terms" })}
              />
              <label className="checkboxForm__textContent">
                Yes, I confirm that I have read and accept all of the
                <a href="#">Terms Of Use</a> and
                <a href="#">Privacy Statement</a>.
                <span className="required">*</span>
              </label>
              {errors.acceptTerms && <span>{errors.acceptTerms.message}</span>}
            </div>

            <div className="checkbox-container flex">
              <input
                type="checkbox"
                className="checkboxInput"
                {...register("receiveEmails")}
              />
              <label className="checkboxForm__textContent">
                Yes, I’d also like to receive emails from Foot Locker Sweden about new products, offers, and more.
              </label>
            </div>
          </div>

          <button type="submit" className="submit">Create an account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;