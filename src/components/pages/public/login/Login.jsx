import React, { useEffect } from 'react'
import Logo from '../../../../assets/icons/logo.png'
import './login.scss'
import ButtonBG from '../../partials/buttons/ButtonBG'
import PrimaryBtn from '../../../designComponents/PrimaryBtn'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigation = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            navigation("/login");
        }else{
            navigation("/dashboard");
        }
    },[]);

  return (
    <div className='login'>
        <div>
            <div>
                <div className="row">
                    <div className="col content pt-5">
                        <img src={Logo} alt="" />
                        <h1>TonyBank</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col txt_ctn_login pt-5 pb-5">
                        <p>The Best Way to <span>Transfer Money</span> Safety</p>
                    </div>
                </div>
            </div>
        <div className="row">
                <div className="col waves">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#687EFF" fill-opacity="1" d="M0,128L40,138.7C80,149,160,171,240,186.7C320,203,400,213,480,192C560,171,640,117,720,85.3C800,53,880,43,960,37.3C1040,32,1120,32,1200,64C1280,96,1360,160,1400,192L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col button pt-5">
                <Link to={"/signup"}><PrimaryBtn text="create new account"/></Link>
                
            </div>
        </div>
        <div className="row">
            <div className="col text_ctn pt-3">
                <Link to='/signin'>Already have account?</Link>
            </div>
        </div>
    </div>
  )
}
