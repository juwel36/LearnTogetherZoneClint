import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Allassignments = ({ assignments }) => {

  const { Deficalty, date, description, email, image, marks, title, _id } = assignments;
  




  // const handleremove = (id) =>{

  //   fetch(`http://localhost:5000/create/${id}`,{
  //   method:'DELETE',
  //   })
  //   .then(res=> res.json())
  //   .then(data=>{
  //     Swal.fire({
  //       position: 'top-end',
  //       icon: 'success',
  //       title: ' Delete succesfully',
  //       showConfirmButton: false,
  //       timer: 2000
  //     })
  //     console.log(data);

  //     setData((prevUser) => prevUser.filter((item) => item._id !== id));
  //   })
  //   }
  //   <button onClick={()=>handleremove(_id)} className="btn bg-sky-900 text-white"> Delete 🚮 </button>
 




  return (
    <div>

      <div className="card lg:card-side bg-base-100 text-white shadow-xl">
        <figure><img className="w-52 " src={image} alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Marks: {marks}</p>
          <p>Difficulty level: <span className="font-semibold text-xl"> {Deficalty} </span> </p>
          <div className=" flex gap-2">
            <Link to={`/ViewAssignment/${_id}`}> <button className="btn bg-teal-800 text-xs text-white">View Assignment</button> </Link>
            <Link to={`/updateAssignment/${_id}`}> <button className="btn bg-teal-800 text-xs text-white">Update Assignment</button> </Link>
          
          </div>
        </div>
      </div>




   
    </div>
  );
};

export default Allassignments;