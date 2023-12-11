import React, { useState } from 'react';
import Footer from '../../partials/footer/Footer';
import './profile.scss';
import InputCustom from '../../../designComponents/InputCustom';
import Requests from '../../../../services/requests';
import PrimaryBtn from '../../../../components/designComponents/PrimaryBtn';

function Profile(props) {
    const requests = new Requests();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const token = localStorage.getItem('token');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAvatarChange = (e) => {
        setAvatar(e.target.value);
    };

    const handleLogin = () => {
        const userData = {
            fullName: name,
            avatar: avatar,
        };
        console.log('Данные пользователя:', userData);

        requests.PUT_INFO_USER(token, userData)
            .then(user => {
                console.log('Данные пользователя:', user);
            })
            .catch(error => {
                console.error('Ошибка при получении данных пользователя:', error);
            });
    };

    return (
        <div className='profile_main'>
            <div className="container">
                <div className="row">
                    <div className="col mt-3">
                        <h1>Profile</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <InputCustom
                            placeholder="change your name"
                            type="text"
                            value={name}
                            onChange={handleNameChange} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <InputCustom
                            placeholder="change your avatar/ url"
                            type="url"
                            value={avatar}
                            onChange={handleAvatarChange} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6 mx-auto">
                        <PrimaryBtn text="save" onClick={handleLogin} />
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
}

export default Profile;
