import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => console.log(data));
    },[user?.email])
    return (
        <div>
            <h1>reviews</h1>
        </div>
    );
};

export default MyReviews;