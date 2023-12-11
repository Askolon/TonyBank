import React, { useState, useEffect } from 'react'
import './lasttransaction.scss'
import TransactionItem from './transactionItem/TransactionItem';
import '../../../../assets/icons/avatar.png'
import { Link } from 'react-router-dom';

export default function LastTransaction(props) {

    const {transactions} = props;
    //console.log(transactions);

    const [transactionsNew, setTransactionsNew] = useState(transactions);

    useEffect(()=>{
        setTransactionsNew(transactions);
    },[transactions]);
    //console.log(transactionsNew);

  return (
    <div className='lasttransaction'>
        <div className="container">
            <div className="row mt-3 transaction_ctn">
                <div className="col-6 transaction_header">
                    <h2>Last Transaction</h2>
                </div>
                <div className="col-6 view_all">
                    <Link to={"/transactions"}>Show all</Link>
                </div>
            </div>
                <div className="row " data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                    {transactionsNew && transactionsNew.reverse().map( t => <TransactionItem key={Math.random()} {...t}/>)}    
            </div>
        </div>
    </div>
  )
}
