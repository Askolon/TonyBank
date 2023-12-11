import React from 'react'
import Footer from '../../partials/footer/Footer'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TransactionItem from '../../partials/lasttransaction/transactionItem/TransactionItem';
import Requests from '../../../../services/requests';
import PrimaryBtn from '../../../designComponents/PrimaryBtn';
import './notificationsHistory.scss';

export default function NotificationsPage(props) {
    const location = useLocation();
    const requests = new Requests();
    const [notificationsArr, setNotifications] = useState([]);
    console.log(notificationsArr);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (location.state && location.state.notifications) {
            setNotifications(location.state.notifications);
        }
    }, [location.state])

    const handleClear = ()=>{
        requests.DELETE_NOTIFICATIONS(token);
    }

    return (
        <div>
            <div className='container'>
                <div className="row clear_btn">
                    <div className="col-8 mx-auto mt-3 mb-5">
                        <PrimaryBtn text={"Clear History"} onClick={handleClear()}/>
                    </div>
                </div>
                {(notificationsArr && notificationsArr.map(i => <TransactionItem key={i.date} {...i} />)) || <p>Hi</p>}

            </div>
            <Footer />
        </div>

    )
}
