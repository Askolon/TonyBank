import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import TransactionItem from '../lasttransaction/transactionItem/TransactionItem';
import Requests from '../../../../services/requests';
import { useNavigate } from 'react-router-dom';
import './transactions.scss';

export default function Transactions(props) {
  const request = new Requests();
  const [userData, setUserData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [onlyTransactions, setOnlyTransactions] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!token) {
          navigate("/login");
        } else {
          const user = await request.GET_INFO_USER(token);
          if (!user) {
            navigate("/login");
          } else {
            setUserData(user);
            console.log('Данные пользователя:', user);
            const updatedTransactions = user.transactions;
            setTransactions(updatedTransactions);
            setFilteredTransactions(updatedTransactions);
            setTotalAmount(amountSum(updatedTransactions));
          }
        }
      } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
        navigate("/login");
      }
    };

    fetchUserData();
  }, [token, navigate]);

  useEffect(() => {
    if (filteredTransactions) {
      const onlyTrans = filteredTransactions.filter(tr => tr.trType === "in" || tr.trType === "out");
      setOnlyTransactions(onlyTrans);
    }
  }, [filteredTransactions]);

  const amountSum = (transactions) => {
    let sum = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].trType === "request" || transactions[i].trType === "any"|| transactions[i].amount==="null" || transactions[i].amount==="NaN") {
        sum += 0;
      } else {
        sum += transactions[i].amount;
      }
    }
    return sum;
  };

  const handleCheckboxFilter = (e) => {
    const option = e.target.value;
    setSelectedOption(option);

    let filtered = [];
    if (option === "option1") {
      filtered = transactions.filter(user => user.trType === "in");
    } else {
      filtered = transactions.filter(user => user.trType === "out");
    }

    setFilteredTransactions(filtered);
    setTotalAmount(amountSum(filtered));
  };

  return (
    <div className='transactionList'>
      <div className="container">
        <div className="row mt-3">
          <div className="col-6 d-flex justify-content-center">
            <input
              type="radio"
              class="btn-check"
              name="options-outlined"
              id="success-outlined"
              autocomplete="off"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleCheckboxFilter}
            />
            <label class="btn btn-outline-success" for="success-outlined">Income</label>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <input
              type="radio"
              class="btn-check"
              name="options-outlined"
              id="danger-outlined"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleCheckboxFilter}
              autocomplete="off" />
            <label class="btn btn-outline-danger" for="danger-outlined">Expenses</label>
          </div>
        </div>
        <div className="row">
          <div className="col amount mt-5 mb-5">
            <h1>Total: {totalAmount}</h1>
          </div>
        </div>
        <div className="row" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          {onlyTransactions && onlyTransactions.reverse().map(t => <TransactionItem key={Math.round()} {...t} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
