import "./footer.scss";
import homeIcon from '../../../../assets/icons/home_icon.svg';
import arrowsIcon from '../../../../assets/icons/arrows_icon.svg';
import contactsIcon from '../../../../assets/icons/contacts_icon.svg';
import profileIcon from '../../../../assets/icons/contacts_icon.svg';
import { Link, NavLink } from "react-router-dom";
import style from './style.module.css'; // Импорт CSS модуля

function Footer() {
    const className = ({ isActive }) => isActive ? style.active : '';
    return (
        <div className="dashboardfooter">
            <div className="container">
                <div className="row footer_ctn pt-3 mb-3">
                    <div className="col-3 footer_item">
                        <img src={homeIcon} alt="" />
                        <NavLink to="/dashboard" className={className}><p>Home</p></NavLink>
                    </div>
                    <div className="col-3 footer_item">
                        <img src={arrowsIcon} alt="" />
                        <NavLink to="/transactions" className={className}><p>Transaction</p></NavLink>
                    </div>
                    <div className="col-3 footer_item">
                        <img src={contactsIcon} alt="" />
                        <NavLink to="/contacts" className={className}><p>Contacts</p></NavLink>
                    </div>
                    <div className="col-3 footer_item">
                        <img src={profileIcon} alt="" />
                        <NavLink to="/profilesettings/:id" className={className}><p>Profile</p></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
