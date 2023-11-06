import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authproder/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../../Components/Navbar/Navbar";


const Givemark = () => {
const {pdf,note,email,initalMarks,photo,dataTitle,dificaltyLevel}=useLoaderData(null)
// const {user}=useContext(AuthContext)


const handlegivemark=e=>{
  e.preventDefault();
const feedback=e.target.feedback.value;
const marks=e.target.marks.value;
const email2=email
const status=  "completed"
const photo2=photo
const dificaltyLevel2=dificaltyLevel
const initalMarks2=initalMarks

const userData = {
 feedback,marks,email2,status,photo2,dificaltyLevel2,initalMarks2
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