import "./header.scss";
import avatar from '../../../../assets/icons/avatar.png';
import bell from '../../../../assets/icons/bell.svg';
import { useState } from "react";
import Requests from "../../../../services/requests";
import { useNavigate } from "react-router-dom";
import avatarIco from '../../../../assets/icons/avatar.png';

function HeaderPrivate(props) {
    const { avatar, balance, notifications, username, fullName, token } = props;
    const [modal, setModal] = useState(false);
    const navigation = useNavigate();


    const requests = new Requests();

    const handleModal = () => {
        setModal(!modal);
        console.log(modal);
    }

    const LogOut = () => {
        localStorage.clear("token");
        requests.POST_LOGOUT_USER(token);
        navigation("/login"); // redirect to login
    }
    
    const [notifNumbers, setNotifNumbers] = useState(notifications.length);

    return (

        <div className="header pb-3">
            <div className="row header_ctn pt-5">
                <div className="col-6">
                    <h1>Dashboard</h1>
                </div>
                <div className="col-6 avatar_ctn">
                    <div className="avatar" style={{ backgroundImage: `url(${avatar === "any" ? avatarIco : avatar})` }} onClick={handleModal}></div>
                </div>
            </div>
            <div className="row">
                <div className="col pt-3 welcome_name">
                    <h3>Hi, {fullName || username}</h3>
                </div>
            </div>
            <div className="row balance pt-2">
                <div className="col">
                    <h2>Total Balance</h2>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col-6">
                            <h1>$ {balance}</h1>
                        </div>
                        <div className="col-6 bellcoll">
                            <div className="bell position-relative" style={{ backgroundImage: `url(${bell})` }}>
                                <span class="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                                    {notifNumbers >= 1 ? notifNumbers : 0}
                                    <span class="visually-hidden">requests</span>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {modal && (
                <div className="modal">
                    <div className="modal_content">
                        <button className="logout" onClick={LogOut}>Log out</button>
                        <button className="close_btn" onClick={handleModal}>Close window</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeaderPrivate;