import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import avatarBase from '../../../../../assets/icons/avatar.png';
import YellowBtn from '../../../../designComponents/YellowBtn';
import './SendToAllItem.scss'

export default function SendToAllItem(props) {
    const { avatar, fullName, username } = props;
    const navigate = useNavigate();
    const [avatarUrl, setAvatarUrl] = useState(avatar);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setAvatarUrl(avatar); // Если изображение загружено успешно, оставляем текущую ссылку
        };
        img.onerror = () => {
            setAvatarUrl(avatarBase); // Если возникает ошибка при загрузке, меняем ссылку на базовое изображение
        };
        img.src = avatar; // Пытаемся загрузить изображение
    }, [avatar]);

    const handleSend = () =>{

            const userData = {
              avatar: avatarUrl,
              fullName,
              username,
            };
          
            navigate("/sendmoney", { state: userData });
    }

    return (
        <div>
            <div className="row itemSend mt-3 pt-2 pb-2">
                <div className="col-3">
                    <div className="avatar" style={{ backgroundImage: `url(${avatar === "any" ? avatarBase : avatar})` }}></div>
                </div>
                <div className="col-6 username">
                    <p>{username}</p>
                </div>
                <div className="col-3 button">
                    <YellowBtn text={""} onClick={handleSend}/>
                </div>
            </div>
        </div>
    )
}
