import "./footer.scss";
import homeIcon from '../../../../assets/icons/home_icon.svg';
import arrowsIcon from '../../../../assets/icons/arrows_icon.svg';
import contactsIcon from '../../../../assets/icons/contacts_icon.svg';
import profileIcon from '../../../../assets/icons/contacts_icon.svg';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="dashboardfooter">
            <div className="container">
                <div className="row footer_ctn pt-3 mb-3">
                    <div className="col-3 footer_item">
                        <img src={homeIcon} alt="" />
                        <Link to="/dashboard"><p>Home</p></Link>
                    </div>
                    <div className="col-3 footer_item">
                        <img src={arrowsIcon} alt="" />
                        <Link to="/transactions"><p>Transaction</p></Link>
                    </div>
                    <div className="col-3 footer_item">
                        <img src={contactsIcon} alt="" />
                        <Link to="/contacts"><p>Contacts</p></Link>
                    </div>
                    <div className="col-3 footer_item">
                        <img src={profileIcon} alt="" />
                        <Link to="/profile/:id"><p>Profile</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;