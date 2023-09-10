import React from 'react'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'
import Btnnavbar from './Btnnavbar'
import logo from '../Navbar/Jobinverted.png'



function Navbar(props) {

    

    const styling = {
        atext: {
            textDecoration: 'none'
        },


        btnColor:
        {
            backgroundColor: 'red',
            color: 'white'
        },

    };
    return (
        <div className={style.navbar}>
            <div className={style.logodiv}>
                <img src={logo} alt='A Logo' className={style.logo}></img>
            </div>
            <div className={style.navbarbtns} >
                <Link to={props.userhome}><h1>Home</h1></Link>
                <Link to='/jobs'><h1>Jobs</h1></Link>
                <h1 style={{color:props.color}}>About</h1>
            </div>
            <div className={style.btndiv}>

                <Link to={props.userlink}><Btnnavbar text={props.touser} color="white" bgcolor="rgb(107, 169, 208)" style={styling.btnColor} /></Link>
                <Link to='/login'><Btnnavbar style={{ height: "auto"}} className={style.navbutton} text="Logout" color="red"></Btnnavbar></Link>
            </div>
        </div>
    )
}

export default Navbar