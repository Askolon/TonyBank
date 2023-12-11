import React, { useState } from "react";
import Requests from "../../../../services/requests";
import PrimaryBtn from "../../../designComponents/PrimaryBtn";
import SendIcon from "@mui/icons-material/Send";
import InputCustom from "../../../designComponents/InputCustom";
import GrayBtn from '../../../../components/designComponents/GrayBtn';
import './signUp.scss';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUP(props) {
    const [error, setError] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const requests = new Requests();
    const [message, setMessage] = useState(false);
    const navigate = useNavigate();

    const [modal, setModal] = useState(false);

    const handleEmailChange = (e) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleLogin = () => {
        const userData = {
            "username": name,
            "password": password,
            "confirm_password": confirm_password
        };
        if (password == confirm_password) {
            requests.POST_REG_USER(userData)
                .then(data => {
                    if (data.id) {
                        setModal(true);
                        setError(false);
                        setTimeout(() => {
                            setModal(false)
                            navigate('/signin');
                          }, 3000);
                    } else {
                        setError(true);
                    }
                })
                .catch((error) => {
                    setError(true);
                    console.error(error);
                });
        } else {
            setMessage(true);
            console.log("Wrong Confirm Password");
        }

    };

    return (
        <section id='signin'>
            <div className="container">
                <div className='bottom_block pt-5'>
                    <div className="row">
                        <div className="col">
                            <h1>Login and start transfering</h1>
                        </div>
                        <div className="col buttons pt-3 pb-5">
                            <GrayBtn text="Google" />
                            <GrayBtn text="Facebook" />
                        </div>
                    </div>
                </div>
                <div className="login_inputs">
                    <div className="row">
                        <div className="col col-lg-6 mt-1">
                            <InputCustom
                                placeholder="Enter your email"
                                type="email"
                                value={name}
                                onChange={e => { handleEmailChange(e, setName) }} />
                        </div>
                        <div className="col col-lg-6 mt-3">
                            <InputCustom
                                placeholder="Enter your password"
                                type='password'
                                value={password}
                                onChange={e => { handlePasswordChange(e, setPassword) }} />
                        </div>
                        <div className="col col-lg-6 mt-3">
                            <InputCustom
                                placeholder="Confirm your password"
                                type='password'
                                value={confirm_password}
                                onChange={e => { handleConfirmPassword(e, setConfirmPassword) }} />
                        </div>
                        <div className="col">
                            {message && <p>Wrong confirm password</p>}
                        </div>
                    </div>
                </div>
                <div className="login_btns mt-1 pt-5">
                    <div className="row">
                        <div className="col col-lg-4">
                            <PrimaryBtn text="Create" onClick={handleLogin} />
                        </div>
                        <div className="col pt-2">
                            <Link to={"/signin"}>Already have account?</Link>
                        </div>
                    </div>
                </div>
            </div>
            {modal && (
                <div className="modal_bg">
                    <div className="modal_ctn">
                        <div className="row">
                            <div className="col">
                                <h1>The account has been created.
                                </h1>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>
                                    Please wait.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default SignUP;
