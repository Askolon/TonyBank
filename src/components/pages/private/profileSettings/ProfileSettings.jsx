import React from 'react'
import Footer from '../../partials/footer/Footer'
import Requests from '../../../../services/requests'
import { useState, useEffect } from 'react'
import { set } from 'react-hook-form';
import avatarIco from '../../../../assets/icons/arrows_icon.svg'
import GrayBtn from '../../../designComponents/GrayBtn';
import userIco from '../../../../assets/icons/user_icon.svg'
import settings from '../../../../assets/icons/home_icon.svg'
import './profileSettings.scss'
import { useNavigate } from 'react-router-dom';

export default function ProfileSettings() {
    const requests = new Requests();
    const token = localStorage.getItem("token");
    const [userData, setUserData] = useState({ avatar: '', username: 'user'});
    const navigation = useNavigate();


    useEffect(()=>{
        const userData = async () =>{
            const user = await requests.GET_INFO_USER(token);
            setUserData(user);
        }
        userData();
    },[token])

    const handleNaviToInfo = () =>{
        const userDataSend = {
            avatar: userData.avatar,
            username: userData.username
        }
        navigation("/sendmoney", { state: userDataSend });
    }

    const handleSettings = () =>{
        navigation("/profile/:id");
    }

  return (
    <div>
        <div className="container">
            <div className="row mt-3">
                <div className="col d-flex align-items-center justify-content-center">
                    <h1>My Profile</h1>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center">
                <div className="avatar" style={{ backgroundImage: `url(${userData.avatar === "any" ? avatarIco : userData.avatar})` }}></div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col d-flex align-items-center justify-content-center">
                    <h2>{userData.username}</h2>
                </div>
            </div>
            <div className='buttons'>
                <div className="row mt-3" onClick={handleNaviToInfo}>
                    <div className="col-10 d-flex justify-content-center align-itens-center mx-auto">
                        <button className="button_profile">
                            <div className="row">
                                <div className="col-3">
                                    <img src={userIco} alt="user_icon" />
                                </div>
                                <div className="col-6">
                                    My Info
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="row mt-3" onClick={handleSettings}>
                    <div className="col-10 d-flex justify-content-center align-itens-center mx-auto">
                        <button className="button_profile">
                            <div className="row">
                                <div className="col-3">
                                    <img src={settings} alt="user_icon" />
                                </div>
                                <div className="col-6">
                                    Settings
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
