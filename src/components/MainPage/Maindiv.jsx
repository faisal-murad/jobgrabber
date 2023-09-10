import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../../App.css'
// import imag from '../assets/jobbg.jpg'
import { BiSolidSearch } from 'react-icons/bi'

function Maindiv() {

  return (
    <div className='maindiv'>
      <Navbar touser="For Employers" userlink="/employee" userhome="/main" />
      <div className="Maincontainer">

        {/* <img src={imag} alt="" /> */}

        <div>
          <h1 className='Mainhero tracking-in-contract-bck'>
            Find your perfect <span className='job'>Job!</span>
          </h1>

        </div>

        <div className='searchmaindiv'>
          <div>

            <div className='searchbar'>

              <input type="text" placeholder='What are you looking for?' className='search' id='search' />
              <div className='searchicon'><BiSolidSearch /></div>

            </div>
            <div className='Selectdiv'>
              <select name="" id="">
                <option value="Select" selected>Select City</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Karachi">Karachi</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Gwadar">Gwadar</option>
                <option value="Quetta">Quetta</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Maindiv