import React, { useEffect } from 'react'
import Logo from '../../../../assets/icons/logo.png'
import './login.scss'
import ButtonBG from '../../partials/buttons/ButtonBG'
import PrimaryBtn from '../../../designComponents/PrimaryBtn'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigation = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigation("/login");
        } else {
            navigation("/dashboard");
        }
    }, []);

    return (
        <div className='login'>
            <div>
                <div>
                    <div className="row">
                        <div className="col content pt-5">
                            <img src={Logo} alt="" />
                            <h1>TonyBank</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col txt_ctn_login pt-5 pb-5">
                            <p>The Best Way to <span>Transfer Money</span> Safety</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col waves d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#687EFF" fillOpacity="1" d="M0,0L60,53.3C120,107,240,213,360,266.7C480,320,600,320,720,309.3C840,299,960,277,1080,224C1200,171,1320,85,1380,42.7L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col button pt-5">
                    <Link to={"/signup"}><PrimaryBtn text="create new account" /></Link>

                </div>
            </div>
            <div className="row">
                <div className="col text_ctn pt-3">
                    <Link to='/signin'>Already have account?</Link>
                </div>
            </div>
        </div>
    )
}
