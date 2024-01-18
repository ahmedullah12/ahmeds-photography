import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import axios from 'axios';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const {data: savedUser = {}} = useQuery({
        queryKey: ["user", user],
        queryFn: async() => {
            const res = await axios.get(`https://assignment-11-server-side-wine.vercel.app/user?email=${user?.email}`);
            const data = await res.data;
            return data;
        }
    })


    const handleLogOut = () => {
        logOut()
        .then(() => {
            navigate('/login')
        })
        .catch(err => console.log(err))
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blog</Link></li>
        <li><Link to='/services'>Services</Link></li>
        {
            user?.uid ?
            <>
                {
                    savedUser.isAdmin === false ? 
                    <li><Link to='/my-bookings'>My Bookings</Link></li>
                    :
                    savedUser.isAdmin === true ?
                    <li><Link to='/add-services'>Add services</Link></li> :
                    <li></li>
                }
                <li><button className='ml-2 text-white btn btn-primary  btn-sm md:btn-md'
                 onClick={handleLogOut}>Log Out</button></li>
                <div  className="flex gap-2 px-4 py-3">
                    <img className='w-7 h-7 rounded-full' src={user?.photoURL} alt="" />
                    <p>{user?.displayName}</p>
                </div>
            </>
            :
           <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
           </>
        }
        
    </>

    return (
        <div className="navbar h-20  bg-white rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Ahmed's Photgraphy
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            
            
        </div>
    );
};

export default Header;