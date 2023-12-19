import React from 'react'
import style from './navbar.module.css'
import { Link } from 'react-router-dom' 
import logo from '../Navbar/Jobinverted.png' 
import logout from '../assets/logout.png'


function Navbar(props) {

 
    const instyle = {
      color: 'black',
      backgroundColor: 'rgb(107, 169, 208)',
      width: props.width,
      borderRadius: props.bradius,
      height: props.height
 
  
    };
    return (
        <div className={style.navbar}>
            <div className={style.logodiv}>
                <img src={logo} alt='A Logo' className={style.logo}></img>
            </div>
            <div className={style.navbarbtns} >
                <Link to={props.userhome}><h1>Home</h1></Link>
                <Link to='/jobs'><h1>Jobs</h1></Link>
                <h1 style={{ color: props.color }}>About</h1>
            </div>
            <div className={style.btndiv}>


            <Link to={props.userlink}><button className={style.navbutton} style={instyle}>
            {props.touser}
                </button></Link>

            <Link to='/login'><button className={style.navbuttonlogout} >
                    Logout
                </button></Link>

                <Link to='/login'><img className={style.logoutIcon} src={logout} alt='logout'/></Link>
                {/* <Link to={props.userlink}><Btnnavbar text={props.touser} color="white" bgcolor="rgb(107, 169, 208)" style={styling.btnColor} /></Link>
                <Link to='/login'><Btnnavbar id="log" style={{ height: "auto" }} className={style.navbutton} text="Logout" color="red"></Btnnavbar></Link> */}
            </div>
        </div>
    )
}

export default Navbar