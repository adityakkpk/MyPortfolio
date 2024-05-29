import React from 'react'
import {CONTACT} from '../constants'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'

const Contact = () => {
  return (
    <div id='contact' className='border-b border-neutral-800 pb-4 pt-4'>
        <h2 className='my-20 text-center text-4xl'>
            Get in 
            <span className='text-neutral-500'> Touch</span>
        </h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">
                {CONTACT.address}
            </p>
            <p className='my-4'>
                {CONTACT.phoneNo}
            </p>
            <a href="#" className="border-b">
                {CONTACT.email}
            </a>
        </div>

        <div className="flex flex-wrap items-center justify-center text-2xl gap-4 px-3 py-10">
            <a href="https://www.linkedin.com/in/adityakumarkushwaha">
                <FaLinkedin />
            </a>
            <a href="https://github.com/adityakkpk">
                <FaGithub />
            </a>
            <a href="https://x.com/akkpk933">
                <FaSquareXTwitter />
            </a>
        </div>
    </div>
  )
}

export default Contact
