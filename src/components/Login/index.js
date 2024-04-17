
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
// import { jwtDecode } from "jwt-decode";
// import Cookies from 'js-cookie'
import { useNavigate} from 'react-router-dom';


import './index.css'


const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleGoogleLoginSuccess = credentialResponse => {
        console.log(credentialResponse);
        setLoggedIn(true);
    }

    const handleGoogleLoginError = () => {
        console.log('Login Failed');
    }

    if (loggedIn) {
        navigate('/home');
    }

    return(
    <div className='login-cont'>
        <div className='login-name'>
            <h1>Board.</h1>
        </div>
        <div className='login-form'>
            <div className='login-app'>
                <div className='login-para'>
                    <h1 className='login-head'>Sign In</h1>
                    <p className='login-desc'>Sign in to your Account</p>
                    <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onError={handleGoogleLoginError}

                    />
                </div>
               
                <form className="my-form">
                    <div className="input-cont">
                        <label htmlFor="username" className="input-label">
                            Email address
                        </label>
                        <input
                            type="text"
                            id="username"

                                placeholder="Email"
                            className="input"
                        />
                    </div>

                    <div className="input-cont">
                        <label htmlFor="password" className="input-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="input"
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Sign In
                    </button>

                </form>


            </div>

        </div>
       
       
    </div>
    )

}


export default Login