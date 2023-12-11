import React, { useState } from 'react';
import './transactionitem.scss';
import avatarIco from '../../../../../assets/icons/avatar.png';
import { useNavigate } from 'react-router-dom';

export default function TransactionItem(props) {
    const { avatar, userAvatar, userName, trDate, amount, trType, tradingCode } = props;
    const value = '$';
    const navigation = useNavigate();

    const outStyle = {
        color: "red"
    }
    const inStyle = {
        color: "green"
    }
    const requestStyle = {
        color: "orange"
    }

    let trstyle = {};

    switch (trType) {
        case "out":
            trstyle = outStyle;
            break;
        case "requestin":
            trstyle = requestStyle;
            break;
        case "requestout":
            trstyle = requestStyle;
        case "request":
            trstyle = requestStyle;
            break;
        default:
            trstyle = inStyle;
            break;
    }

    const handleInfoTransaction = () => {
        if (trType === "request") {
          console.log("here is the info");
          const propsI = {
            avatar,
            userAvatar,
            userName,
            trType,
            tradingCode,
            amount
          }
          navigation("/transactioninfo", { state: propsI });
        }
      };

    return (
        <div className='transaction_item' onClick={handleInfoTransaction}>

            <div className="row item">

                <div className="col-3 d-flex justify-content-center align-items-center">
                    <div className="avatar" style={{ backgroundImage: `url(${userAvatar === "any" ? avatarIco : userAvatar || avatar})` }}>
                    </div>
                </div>
                <div className="col-6 mt-2 user_data">
                    <p className='username'>{userName}</p>
                    <p className='datetransaction'>{trDate? trDate : ""}</p>
                </div>
                <div className="col-3 summe d-flex">
                    <h2 style={trstyle}>
                        {amount ? amount : ""}
                    </h2>
                </div>

            </div>
        </div>
    )
}
