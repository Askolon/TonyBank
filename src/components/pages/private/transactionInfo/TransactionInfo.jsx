import React, { useEffect } from 'react'
import Footer from '../../partials/footer/Footer'
import { useLocation } from 'react-router-dom';
import avatarIco from '../../../../assets/icons/avatar.png'
import PrimaryBtn from '../../../designComponents/PrimaryBtn';
import RequestBtn from '../../../designComponents/RequestBtn';
import Request from '../../../../services/requests';
import { useNavigate } from 'react-router-dom';
import './transactionInfo.scss';
import { useState } from 'react';

export default function TransactionInfo(props) {
  const location = useLocation();
  const transactionInfo = location.state;
  const request = new Request();
  const token = localStorage.getItem("token");
  const navigate = new useNavigate();
  const [modal, setModal] = useState(false);

  console.log(transactionInfo);


  const handleConfirm = () => {
    const data = {
      tradingCode: Number(transactionInfo.tradingCode),
      trType: "request-done"
    }
    request.POST_TRANSACTION_REQUEST(token, data);
    console.log("Сработало");
    setModal(true);
    setTimeout(() => {
      setModal(false)
      navigate('/dashboard');
    }, 3000);
  }

  const handleRefuse = () => {
    const data = {
      tradingCode: Number(transactionInfo.tradingCode),
      trType: "request-reject"
    }
    request.POST_TRANSACTION_REQUEST(token, data);
    console.log("Отклонен");
    setModal(true);
    setTimeout(() => {
      setModal(false)
      navigate('/dashboard');
    }, 3000);
  }



  return (
    <div className='container'>
      <div className="row mt-3 mb-5">
        <div className="col avatar_ctn d-flex align-item-center justify-content-center">
          <div className="avatar" style={{ backgroundImage: `url(${transactionInfo.avatar === "any" ? avatarIco : transactionInfo.userAvatar})` }}></div>
        </div>
      </div>
      <div className="row mt-3 mb-5">
        <div className="col userName_ctn d-flex align-item-center justify-content-center">
          <h1>{transactionInfo.userName}</h1>
        </div>
      </div>
      <div className="row mt-3 mb-5">
        <div className="col amount_ctn d-flex align-item-center justify-content-center">
          <h1>{transactionInfo.amount} $</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <RequestBtn text={"Confirm"} onClick={handleConfirm} />
        </div>
        <div className="col-6">
          <RequestBtn text={"Refuse"} onClick={handleRefuse} />
        </div>
      </div>
      {modal && (
             <div className="modal_bg">
             <div className="modal_ctn">
               <div className="row">
                 <div className="col">
                   <h1>The transfer has been made.
                   </h1>
                 </div>
     
               </div>
               <div className="row">
                 <div className="col">
                   <h2>
                     Please wait, redirecting
                   </h2>
                 </div>
               </div>
             </div>
           </div>
      )}
      <Footer />
    </div>
  )
}
