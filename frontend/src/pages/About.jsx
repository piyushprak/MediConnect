import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
            <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
            <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                <p><strong>Welcome to MediConnect –</strong> Your Trusted Partner in Simplifying Healthcare.
At MediConnect, we understand the challenges people face when it comes to booking doctor appointments and keeping track of their health records. That’s why we’re here to make healthcare management convenient, efficient, and stress-free—all in one place.
                </p>
                <p>MediConnect is committed to excellence in healthcare technology.
We continuously evolve our platform, integrating the latest innovations to enhance your experience and deliver superior care.
Whether you’re booking your first appointment or managing ongoing treatments, MediConnect is here to support you every step of the way.
                </p>
                <b className='text-gray-800'>Our Vision</b>
                <p>
At MediConnect, our vision is to create a truly seamless healthcare experience for every user.
We strive to bridge the gap between patients and healthcare providers, ensuring you can access the care you need— <strong>anytime, anywhere.</strong>
                </p>
            </div>
        </div>
        <div className='text-xl my-4'>
            <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>
        <div className='flex flex-col md:flex-row mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>EFFICIENCY:</b>
                <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>CONVENIENCE:</b>
                <p>Access To A Network Of Trusted HealthCare Professionals In Your Area.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>PERSONALIZATION:</b>
                <p>Tailored Recommenations And Remainders To Help You Stay On Top Of Your Health.</p>
            </div>
        </div>
    </div>
  )
}

export default About
