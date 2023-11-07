import { useContext } from "react";
import Footer from "./Navbar/Footer";
import Navbar from "./Navbar/Navbar";
import { AuthContext } from "../Authproder/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateAssignments = () => {
const {user}=useContext(AuthContext)
const navigate=useNavigate()

const hanldecreateassignments= e=>{
  e.preventDefault();
const title=e.target.title.value;
const marks=e.target.marks.value;
const image=e.target.image.value;
const Deficalty=e.target.Deficalty.value;
const Spotlight=e.target.Spotlight.value;
const date=e.target.date.value;
const email=e.target.email.value;
const description=e.target.description.value;
const status=  "pending"

if (!title || !marks || !image || !Deficalty || !date || !email || !description || !Spotlight) {
  Swal.fire({
    icon: 'error',
    title: 'Validation Error',
    text: 'Please fill in all required fields.',
  });
  return;
}



const create={
title,marks,image,Deficalty,date,email,description,status,Spotlight

}
axios.post('http://localhost:5000/create',create)
.then(res=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: ' Create Assignments Successfully ',
    showConfirmButton: false,
    timer: 1500
  })

  navigate('/')
})



}




  return (


    <div className="bg-white">
      <Navbar></Navbar>
      <div className=" max-w-6xl mx-auto">
<div >

<form  onSubmit={hanldecreateassignments}>
<div className="flex  gap-7 mt-10">

<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3">Title</h1>
<input type="text" name="title" placeholder="Title here" className="input input-bordered input-info w-full " />
</div>

<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3">Marks</h1>
<input type="text" name="marks" placeholder="Place Mark" className="input input-bordered input-info w-full " />
</div>

</div>

{/* ---- */}
<div className="flex  gap-7">

<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3">
Image URL</h1>
<input type="text" name="image" placeholder="Thumbnail 
Image URL" className="input input-bordered input-info w-full " />
</div>

<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3">Assignment difficulty level</h1>

<select name="Deficalty" id="" className="input input-bordered input-info w-full">
  <option value="Easy">Easy</option>
  <option value="Medium">Medium</option>
  <option value="Hard">Hard</option>
</select>

</div>

</div>

{/* ---------------- */}
<div className="flex gap-7">
<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3">
Due Date</h1>
<input type="date" name="date" placeholder="Thumbnail 
Image URL" className="input input-bordered input-info w-full " />
</div>

<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3">
User Email </h1>
<input type="text" name="email" placeholder="" readOnly defaultValue={user.email} className="input input-bordered input-info w-full " />


</div>
</div>

{/* ------------------- */}
<div className="flex gap-7">
<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3"> Spotlight
 </h1>
 <select name="Spotlight" id="" className="input input-bordered input-info w-full">
  <option value="Regular-Picks">Regular-Picks</option>
  <option value="Featured">Featured </option>
 
</select>


</div>

<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3">
Description </h1>
 <textarea name="description" id="" className="input input-bordered input-info w-full " ></textarea>

</div>


</div>

<input className="btn w-full my-8 mb-14" type="submit" value="Create Assignments" />


</form>





</div>

      
    </div>
<Footer></Footer>

    </div>
  );
};

export default CreateAssignments;