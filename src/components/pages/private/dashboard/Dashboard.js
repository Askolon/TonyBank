import React, { useState, useEffect } from 'react';
import avatar from '../../../../assets/icons/avatar.png';
import Requests from '../../../../services/requests';
import './dashboard.scss';
import YellowBtn from '../../../designComponents/YellowBtn';
import RequestBtn from '../../../designComponents/RequestBtn';
import HeaderPrivate from '../../partials/header/HeaderPrivate';
import LastTransaction from '../../partials/lasttransaction/LastTransaction';
import Footer from '../../partials/footer/Footer';
import { useNavigate } from 'react-router-dom';
import Transactions from '../../partials/transactions/Transactions';

function Dashboard(props) {
    const request = new Requests();
    const [userData, setUserData] = useState(null);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if(!token){
            navigate("/login");
        }
        if (token) {
            request.GET_INFO_USER(token)
                .then(user => {
                    setUserData(user);
                    console.log('Данные пользователя:', user);
                    setUserData(user);
                })
                .catch(error => {
                    console.error('Ошибка при получении данных пользователя:', error);
                });
        }
    }, [token]);

    console.log(userData, "Вот что пришло нам");

    return (
        <div className='dashboard'>
            <HeaderPrivate {...userData} token={token}/>
            <div className="container">
                <div className="btn_ctn mt-4">
                    <div className="row">
                        <div className="col">
                            <YellowBtn text={"send"}/>
                        </div>
                        <div className="col">
                            <RequestBtn text={"Request"}/>
                        </div>
                    </div>
                </div>
                <LastTransaction {...userData}/>
                <Footer/>
            </div>
        </div>
    );
}

export default Dashboard;