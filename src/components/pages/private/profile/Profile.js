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
            <h1>Profile</h1>
            <div className="container">
                <InputCustom
                    placeholder="change your name"
                    type="text"
                    value={name}
                    onChange={handleNameChange} />

                <InputCustom
                    placeholder="change your avatar/ url"
                    type="url"
                    value={avatar}
                    onChange={handleAvatarChange} />
                <PrimaryBtn text="save" onClick={handleLogin} />
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
