import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import Requests from '../../../../services/requests';
import { useNavigate } from 'react-router-dom';
import ContactItem from './contactItem/ContactItem';
import "./Contacts.scss";


export default function Contacts() {
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
        {usersList && usersList.map(u => <ContactItem key={u._id} {...u}/>)}
      <Footer />
    </div>
  );
}
