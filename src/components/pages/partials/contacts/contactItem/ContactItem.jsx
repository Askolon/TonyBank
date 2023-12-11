import React, { useState, useEffect } from 'react';
import avatarBase from '../../../../../assets/icons/avatar.png';
import './ContactItem.scss';
import { useNavigate } from 'react-router-dom';

export default function ContactItem(props) {
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

  const handleClick = () => {
    const userData = {
      avatar: avatarUrl,
      fullName,
      username,
    };
  
    navigate("/sendmoney", { state: userData });
  };

  return (
    <div className="row mt-3 contactItem pt-2 pb-2" onClick={handleClick}>
      <div className="col-3">
        <div className="avatar" style={{ backgroundImage: `url(${avatarUrl === "" ? avatarBase : avatarUrl})` }}></div>
      </div>
      <div className="col-5 userName">
        <p>{username}</p>
      </div>
      <div className="col-4"></div>
    </div>
  );
}
