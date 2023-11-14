import React, { useState } from 'react';
import InputCustom from '../../../designComponents/InputCustom';
import PrimaryBtn from '../../../../components/designComponents/PrimaryBtn';
import { Link, useNavigate } from 'react-router-dom';
import GrayBtn from '../../../../components/designComponents/GrayBtn';
import './signIn.scss';
import Requests from '../../../../services/requests';

function SignIn(props) {
    const [error, setError] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const requests = new Requests();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        const userData = {
            "username": name,
            "password": password,
        };

        requests.POST_LOG_USER(userData)
            .then(data => {
                if (data.token) {
                    setError(false);
                    localStorage.setItem('token', data.token);
                    navigate("/dashboard");
                    console.log('Токен сохранен в localStorage:', data);
                } else {
                    setError(true);
                    console.log("Its work");
                }
            })
            .catch((error) => {
                setError(true);
                console.error(error);
                alert({error});
            });
    };

    return (
        <section id='signin'>
            <div className="container">
            <div className='bottom_block pt-5'>
                    <div className="row">
                        <div className="col">
                            <h1>Login and start transfering</h1>
                        </div>
                        <div className="col buttons pt-5 pb-5">
                            <GrayBtn text="Google"/>
                            <GrayBtn text="Facebook"/>
                        </div>
                    </div>
                </div>
                <div className="login_inputs">
                    <div className="row">
                        <div className="col col-lg-6 mt-3">
                            <InputCustom
                                placeholder="Enter your email"
                                type="email"
                                value={name}
                                onChange={e =>{handleEmailChange(e, setName) }} />
                        </div>
                        <div className="col col-lg-6 mt-3">
                            <InputCustom 
                            placeholder="Enter your password" 
                            type='password' 
                            value={password} 
                            onChange={e =>{ handlePasswordChange(e, setPassword)}} />
                        </div>
                    </div>
                </div>
                <div className="login_btns mt-5 pt-5">
                    <div className="row">
                        <div className="col">
                            <Link to={error ? "/dashboard" : "/signin"}><PrimaryBtn text="Login" onClick={handleLogin} /></Link>
                        </div>
                        <div className="col pt-2">
                            <Link to={"/signup"}>Create new account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
