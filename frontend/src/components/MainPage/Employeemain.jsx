import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../../App.css'
import { Link } from 'react-router-dom'

function Employeemain() {

  return (
    <div className='maindiv'>
      <Navbar touser="Seeking Job?" userlink="/main" userhome="/employee"/>
    
      <div className="Maincontainer">

        {/* <img src={imag} alt="" /> */}

        <div>
          <h1 className='Mainhero tracking-in-contract-bck'>
            Find your perfect <span className='job'>Employee!</span>
          </h1>

        </div>

        <div className='searchmaindiv'>
          <div>

            <div>

              <Link to='/postjob'><button type="text" placeholder='What are you looking for?' className='postjobbtn'>Post a Job!</button></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employeemain