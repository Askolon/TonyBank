import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import TransactionItem from '../lasttransaction/transactionItem/TransactionItem';
import Requests from '../../../../services/requests';
import { useNavigate } from 'react-router-dom';

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
      if(transactions[i].trType === "request"){
        sum += 0;
      }else{
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
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleCheckboxFilter}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">Show Income</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleCheckboxFilter}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">Show expenses</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>Total: {totalAmount}</p>
          </div>
        </div>
        <div className="row" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          {onlyTransactions && onlyTransactions.reverse().map(t => <TransactionItem key={t.data} {...t} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
