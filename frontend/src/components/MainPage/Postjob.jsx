import React from 'react'
import Navbar from '../Navbar/Navbar'

function Postjob() {
    return (
        <div>
             <Navbar touser="Seeking Job?" userlink="/main" userhome="/employee" /> 
            <div style={{ display: 'block', paddingTop: '7%' }} className='container'>
                <form action="">
                    <div className='postjobinputbar'>
                        <div className='postjobtitle'>Job Title</div>
                        <input type="text" name="" id="" placeholder="Enter title" className='postinput' />
                    </div>
                    <div className='postjobinputbar'>
                        <div className='postjobtitle'>Company Name</div>
                        <input type="text" name="" id="" placeholder="Enter title" className='postinput' />
                    </div>
                    <div className='postjobinputbar'>
                        <div className='postjobtitle'>Location</div>
                        <select name="" id="" className='postinput'>
                            <option value="default">Select City</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Rawalpindi">Rawalpindi</option>
                            <option value="Gwadar">Gwadar</option>
                            <option value="Quetta">Quetta</option>
                        </select>
                    </div>
                    <div className='postjobinputbar'>
                        <div className='postjobtitle'>Job Type</div>
                        <select name="" id="" className='postinput'>
                            <option value="default">Select Option</option>
                            <option value="Fulltime">Full Time</option>
                            <option value="Parttime">Part Time</option>
                        </select>
                        {/* <input type="text" name="" id="" placeholder="Enter title" className='postinput'/> */}
                    </div>
                    <div className='postjobinputbar'>
                        <div className='postjobtitle'>Job Category</div>
                        <select name="" id="" className='postinput'>
                            <option value="default">Select Category</option>
                            <option value="default">Accounting/Finance/Auditing</option>
                            <option value="default">Admin/Clerk/Office Assistant</option>
                            <option value="default">Agriculture/Dairy/Fisheries</option>
                            <option value="default">Apparel/Garments/Clothing</option>
                            <option value="default">Architecture/Interior/Design</option>
                            <option value="default">Automotive/Aviation</option>
                            <option value="default">Cashier</option>
                            <option value="default">IT/Programming</option>
                        </select>
                    </div>
                    <div className='postjobinputbar'>
                        <div className='postjobtitleDesc'>Description</div>
                        <textarea name="" id="" cols="30" rows="10" className='description'></textarea>
                    </div>
                    <div className='searchmaindiv'>
                        <div>
                                <button type="submit" className='postjobbtn'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Postjob