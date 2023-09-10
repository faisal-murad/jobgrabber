import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';

function Jobs() {
    return (
        <>
            <div style={{position: 'fixed', display:'flex', width:'100%'}}><Navbar touser="For Employers" userlink="/employee" userhome="/main"/></div>
            <div className='jobsmaindiv'>
                <h1 style={{color:'white', paddingTop:'7%', textAlign:'center'}}>Jobs Available</h1>
                <div className="container">
                   
                    <div className='jobsection'>
                        <Link to='/jobdetails'>
                            <div className='jobheader'><h1>Senior Event Planner</h1><div className='typeofwork'><h6>Full-Time</h6></div></div>
                            <p>Lead development & conceptualization of organization's strategy for events. Provides oversight & team leadership to Events Marketing Manager & manages external resources to provide additional onsite support.Outline scope of events, forecasting budget.</p>
                        </Link>
                    </div>
                    <div className='jobborder'></div>

                    <div className='jobsection'>
                        <div className='jobheader'><h1>Senior Event Planner</h1><div className='typeofwork'><h6>Full-Time</h6></div></div>
                        <p>Lead development & conceptualization of organization's strategy for events. Provides oversight & team leadership to Events Marketing Manager & manages external resources to provide additional onsite support.Outline scope of events, forecasting budget.</p>
                    </div>
                    <div className='jobborder'></div>

                    <div className='jobsection'>
                        <div className='jobheader'><h1>Senior Event Planner</h1><div className='typeofwork'><h6>Full-Time</h6></div></div>
                        <p>Lead development & conceptualization of organization's strategy for events. Provides oversight & team leadership to Events Marketing Manager & manages external resources to provide additional onsite support.Outline scope of events, forecasting budget.</p>
                    </div>
                    <div className='jobborder'></div>

                    <div className='jobsection'>
                        <div className='jobheader'><h1>Senior Event Planner</h1><div className='typeofwork'><h6>Full-Time</h6></div></div>
                        <p>Lead development & conceptualization of organization's strategy for events. Provides oversight & team leadership to Events Marketing Manager & manages external resources to provide additional onsite support.Outline scope of events, forecasting budget.</p>
                    </div>
                    <div className='jobborder'></div>

                    <div className='jobsection'>
                        <div className='jobheader'><h1>Senior Event Planner</h1><div className='typeofwork'><h6>Full-Time</h6></div></div>
                        <p>Lead development & conceptualization of organization's strategy for events. Provides oversight & team leadership to Events Marketing Manager & manages external resources to provide additional onsite support.Outline scope of events, forecasting budget.</p>
                    </div>
                    <div className='jobborder'></div>

                    <div className='jobsection'>
                        <div className='jobheader'><h1>Senior Event Planner</h1><div className='typeofwork'><h6>Full-Time</h6></div></div>
                        <p>Lead development & conceptualization of organization's strategy for events. Provides oversight & team leadership to Events Marketing Manager & manages external resources to provide additional onsite support.Outline scope of events, forecasting budget.</p>
                    </div>
                    <div className='jobborder'></div>

                </div>
            </div>
        </>
    )
}

export default Jobs