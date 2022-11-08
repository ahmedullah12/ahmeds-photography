import React from 'react';
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs"
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-slate-700 py-10 mt-10  text-center'>
            <h3 className='mt-3 text-3xl text-orange-500 '>Ahmed's Photography</h3>
            <p className='text-white mt-4 mb-4'>Stay is Touch</p>
            <div className='mb-4 flex gap-5 justify-center'>
                <Link><BsFacebook></BsFacebook></Link>
                <Link><BsInstagram></BsInstagram></Link>
                <Link><BsTwitter></BsTwitter></Link>
                <Link><BsLinkedin></BsLinkedin></Link>
                <Link><BsWhatsapp></BsWhatsapp></Link>
            </div>
            <div className=''>
            <p className='flex justify-center items-center text-white'><AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>  Ahmed's Photography. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;