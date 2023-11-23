import React from 'react';
import Footer from '../../partials/footer/Footer';
import { Link, useLocation } from 'react-router-dom';
import Requests from '../../../../services/requests';
import { useState } from 'react';
import avatarBase from '../../../../assets/icons/avatar.png';
import './SendMoney.scss';
import InputCustom from '../../../designComponents/InputCustom';
import PrimaryBtn from '../../../designComponents/PrimaryBtn';
import YellowBtn from '../../../designComponents/YellowBtn';

export default function SendMoney(props) {
  const requests = new Requests();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const resivedData = location.state;

  const [userName, setUserName] = useState(resivedData.username);
  const [amount, setAmount] = useState(0);

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;

  const amountValue = parseFloat(amount);
  const formattedAmount = Number(amountValue.toFixed(2));

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  }

  const handleSend = () => {
    const sendData = {
      "amount": amountValue,
      "userName": userName,
      "userAvatar": resivedData.avatar,
      "trDate": formattedDate,
      "trType": "out"
    };
    console.log(sendData);
    requests.POST_TRANSACTION_TO_USER(token, sendData);
    setAmount(0);
  };

  const handleRequest = () =>{
    const sendData = {
      "amount": amountValue,
      "userName": userName,
      "userAvatar": resivedData.avatar,
      "trDate": formattedDate,
      "trType": "requestout"
    };
    console.log(sendData);
    requests.POST_TRANSACTION_TO_USER(token, sendData);
  }


  return (
    <div>
      <div className='row'>
        <div className="col-6 mx-auto mt-5">
          <div className="avatar" style={{ backgroundImage: `url(${resivedData.avatar === "" ? avatarBase : resivedData.avatar})` }}>

          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>
            {resivedData.username}
          </h1>
        </div>
        <div className="col-12">
          <InputCustom
            placeholder='amount'
            type='text'
            value={amount}
            onChange={e => { handleAmountChange(e, setAmount) }} />
        </div>
        <div className="col-6 mt-3">
          <Link to={"/contacts"}>
            <PrimaryBtn text="Send" onClick={handleSend} />
          </Link>
        </div>
        <div className="col-6 mt-3">
          <Link to={"/contacts"}>
            <YellowBtn text="Request" onClick={handleRequest} />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
