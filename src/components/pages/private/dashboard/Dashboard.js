import React, { useState, useEffect } from 'react';
import avatar from '../../../../assets/icons/avatar.png';
import Requests from '../../../../services/requests';
import './dashboard.scss';
import YellowBtn from '../../../designComponents/YellowBtn';
import RequestBtn from '../../../designComponents/RequestBtn';
import HeaderPrivate from '../../partials/header/HeaderPrivate';
import LastTransaction from '../../partials/lasttransaction/LastTransaction';
import Footer from '../../partials/footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import Transactions from '../../partials/transactions/Transactions';
import Modal from '../../partials/modal/Modal';

function Dashboard(props) {
    const request = new Requests();
    const [userData, setUserData] = useState(null);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const checkTokenValidity = async () => {
            try {
                if (!token) {
                    navigate("/login");
                } else {
                    const user = await request.GET_INFO_USER(token);
                    if (!user) {
                        // Если сервер вернул нулевой результат, перенаправить на страницу входа
                        navigate("/login");
                    } else {
                        setUserData(user);
                        console.log('Данные пользователя:', user);
                        setUserData(user);
                    }
                }
            } catch (error) {
                // Обработка ошибок при проверке токена на сервере
                console.error('Ошибка при получении данных пользователя:', error);
                navigate("/login");
            }
        };

        checkTokenValidity();
    }, [token, navigate]);


    return (
        <div className='dashboard'>
            <HeaderPrivate {...userData} token={token} />
            <div className="container">
                <div className="btn_ctn mt-4">
                    <div className="row">
                        <div className="col">
                            <YellowBtn text={"send"} />
                        </div>
                        <div className="col">
                            <RequestBtn text={"Request"} />
                        </div>
                    </div>
                </div>
                <LastTransaction {...userData} />
                <Footer />
            </div>
        </div>
    );
}

export default Dashboard;