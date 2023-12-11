import React, { useState, useEffect } from 'react';
import Footer from '../../partials/footer/Footer';
import Requests from '../../../../services/requests';
import { useNavigate } from 'react-router-dom';
import RequestItem from './requestItem/RequestItem'


export default function RequestFromAll() {
  const [usersList, setUsersList] = useState([]); // Use array destructuring here
  const requests = new Requests();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      requests.GET_USERS_LIST(token)
        .then(usersList => {
          const filteredArray = usersList.filter(obj => obj.avatar !== null && obj.avatar !== '');
          setUsersList(filteredArray);
          console.log(filteredArray);
        })
        .catch(error => {
          console.log("Error fetching user list", error);
        });
    }
  }, [token, navigate]);

  return (
    <div className='container contactsWin'>
        {usersList && usersList.map(u => 
        <RequestItem key={u._id} {...u}/>)}
      <Footer />
    </div>
  );
}
