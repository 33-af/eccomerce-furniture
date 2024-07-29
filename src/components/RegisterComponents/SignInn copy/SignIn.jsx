import { useForm } from 'react-hook-form';
import {Link, useNavigate}  from 'react-router-dom'
import { auth } from '../../../utils/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import './SignIn.css'

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); // Хук для перенаправления
  
    const onSubmit = async (data) => {
      try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        navigate('/profile'); // Перенаправление на страницу профиля после успешного входа
      } catch (error) {
        console.error('Ошибка входа:', error.message);
      }
    };
  
    return (
      <div className="createAccount">
        <div className="container_register">
          <h1>Sign In</h1>
          <div className="createAccount__singInText">
            Dont have an account?
            <Link to='/login'>Create Account</Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="createAccount__registrationForm flex">
            <label htmlFor="email">Email Address*</label>
            <input 
              type="email" 
              className="createAccount__input" 
              id="email" 
              placeholder="Email Address*" 
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            
            <label htmlFor="password">Password*</label>
            <input 
              type="password" 
              className="createAccount__input" 
              id="password" 
              placeholder="Password*" 
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            
            <button type="submit" className="submit">Sign In</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignIn;