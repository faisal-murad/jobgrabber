import React from 'react'
import Navbar from '../Navbar/Navbar'


function Jobdetails() {
    return (
        <div className='jdmain'>
            <Navbar touser="For Employers" userlink="/employee" userhome="/main" />
            <div className='jobdetailsMainDiv'>
                <div className="jobpost">
                    <div className='jobsection'>
                        <div className='jobheader'><h1>Senior Event Planner</h1><div className='typeofwork'><h6>Full-Time</h6></div></div>
                        <p>Lead development & conceptualization of organization's strategy for events. Provides oversight & team leadership to Events Marketing Manager & manages external resources to provide additional onsite support.Outline scope of events, forecasting budget.</p>

                    </div>
                    <div className="jobsummary"> 
                            <div><h1 className='h1'>Job Summary</h1></div>
                            <div><h4 className='h4'>Date Posted</h4><h6 className='h6'>8/27/23</h6></div>
                            <div><h4 className='h4'>Work type</h4><h6 className='h6'>Remote</h6></div>
                            <div><h4 className='h4'>Location</h4><h6 className='h6'>Lahore</h6></div>
                            <div><h4 className='h4'>Job Type</h4><h6 className='h6'>Full-Time</h6></div>
                            <div><h4 className='h4'>Career Level</h4><h6 className='h6'>3-year Experience</h6></div>
                            <div><h4 className='h4'>Skills</h4><h6 className='h6'>Increment in 2 months | Personal Car</h6></div>
                            <div><h4 className='h4'>Categories</h4><h6 className='h6'>Event Planning, Social Media Handling</h6></div>
                            <div><h4 className='h4'>Company</h4><h6 className='h6'>Software House</h6></div>
                            <div><h4 className='h4'>Benefit</h4><h6 className='h6'>Increment in 2 months | Personal Car</h6></div>
                            <button className='applynow'>Apply Now!</button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobdetails