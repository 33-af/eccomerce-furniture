import { useForm } from 'react-hook-form';
import {Link}  from 'react-router-dom'
// import './SignIn.css'

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
 
    const onSubmit = data => {
        console.log(data);
    };
 
    return (
        <div className="createAccount">
            <div className="container_register">
                <h1>Sign In</h1>
                <div className="createAccount__singInText">
                    Dont have an account?
                    <Link to='/login'>Login</Link>
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
