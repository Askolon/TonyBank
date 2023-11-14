import React from 'react';
import './transactionitem.scss';
import avatarIco from '../../../../../assets/icons/avatar.png';

export default function TransactionItem(props) {
    const { userAvatar, userName, trDate, amount } = props;
    const value = '$';


    return (
        <div className='transaction_item'>
            <div className="container">
                <div className="row item">

                    <div className="col-2">
                        <div className="avatar" style={{ backgroundImage: `url(${userAvatar === "any" ? avatarIco : userAvatar})` }}>
                        </div>
                    </div>
                    <div className="col-7">
                        <p className='username'>{userName}</p>
                        <p className='datetransaction'>{trDate}</p>
                    </div>
                    <div className="col-3 summe d-flex">
                        <h2>{amount} {value}</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}
