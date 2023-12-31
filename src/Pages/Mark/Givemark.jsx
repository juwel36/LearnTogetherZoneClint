import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authproder/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../../Components/Navbar/Navbar";


const Givemark = () => {
// const {pdf,note,initalMarks,photo,dificaltyLevel,_id}=useLoaderData(null)
const {pdf,note,initalMarks,photo,dificaltyLevel,_id,dataTitle}=useLoaderData(null)
const navigate=useNavigate()
const {user}=useContext(AuthContext)
console.log(user.email);

const handlegivemark=e=>{
  e.preventDefault();
const feedback=e.target.feedback.value;
const marks=e.target.marks.value;
const email=user.email
const status=  "completed"
const photo2=photo
const dificaltyLevel2=dificaltyLevel
const initalMarks2=initalMarks
const title=dataTitle

const userData = {
 feedback,marks,email,status,photo2,dificaltyLevel2,initalMarks2,title
};

axios.post('http://localhost:5000/feedback',userData)
.then(res=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: ' marks & feedback added  ',
    showConfirmButton: false,
    timer: 1500
  })
  navigate('/submittedassignments')
})


fetch(`http://localhost:5000/submit/${_id}`,{
method:'PATCH',
headers:{
  'content-type':'application/json'
},
body:JSON.stringify({status: 'completed'})
})
.then(res=>res.json())
.then(data=>{
  console.log(data);
})

}





  return (
    <div>
<Navbar></Navbar>

      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <p className="text-xl pl-2">  PDF link : {pdf}   </p>
     <p className="pl-2 pt-2">  Note : {note}   </p>

     
      <form onSubmit={handlegivemark} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Feedback</span>
          </label>
          <input type="text" name="feedback" placeholder="feedback" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marks</span>
          </label>
          <input type="text" name="marks" placeholder="give marks" className="input input-bordered" required />

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>




    </div>
  );
};

export default Givemark;