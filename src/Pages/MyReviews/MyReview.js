import React from 'react';


const Myreview = ({rev, handleDelete}) => {
    const {_id, serviceTitle, serviceImage, review} = rev;
    

    const handleUpdateReview  = (event) => {
        event.preventDefault();
        const newReview = event.target.newReview.value;
        const newRev = {
            review: newReview
        }
        
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newRev)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    

    
   
    return (
        <div className=' lg:flex  gap-5 justify-around items-center bg-slate-100 my-10 p-4'>
            <img className='w-24 h-24 mx-auto mb-6 lg:m-0 rounded-lg' src={serviceImage} alt="" />
            <div>
                <h2 className='text-xl mb-5 lg:text-2xl font-semibold'>Service Name: {serviceTitle}</h2>
                <p className='font-semibold'>Your Review: {review}</p>
            </div>
            <div className='my-4'>
                
               <label htmlFor={`my-modal-${_id}`}  className='btn'>Update Review</label>
                <button onClick={() => handleDelete(_id)}  className='btn btn-warning px-10 mr-6'>Delete</button>

                {/* The button to open modal */}
                

                {/* Put this part before </body> tag */}
                <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
                <label htmlFor={`my-modal-${_id}`} className="modal cursor-pointer">
                    <label className="modal-box relative">
                        <form onSubmit={handleUpdateReview}>
                            <label>Your new review: </label> <br />
                            <textarea className='rounded' name="newReview" id="" cols="40" rows="5"></textarea> <br />
                            <button type='submit' className='btn btn-primary'>Submit</button> 
                        </form>
                    </label>
                </label>
                

            </div>
        </div>
    );
};

export default Myreview;