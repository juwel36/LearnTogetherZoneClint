import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../Authproder/Authprovider";
import { useContext } from "react";
import Swal from "sweetalert2";


const UpdateAssignment = () => {
  const {user}=useContext(AuthContext)
  const navigate = useNavigate()
  const {Deficalty,date,description,image,marks,title,_id}=useLoaderData(null);

const handleupdate=e=>{
  e.preventDefault();
  const title=e.target.title.value;
  const marks=e.target.marks.value;
  const image=e.target.image.value;
  const Deficalty=e.target.Deficalty.value;
  const date=e.target.date.value;
  const description=e.target.description.value;
  
  const update={
  title,marks,image,Deficalty,date,description
  }
console.log(update);
fetch(`https://learn-together-server.vercel.app/create/${_id}`,{
  method:'PUT',
  headers:{
    'content-type':'application/json'
  },
   body: JSON.stringify(update)

})
.then(res=> res.json())
 .then(data=>{
if(data.modifiedCount > 0){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your Updateded Succesfully',
    showConfirmButton: false,
    timer: 3000
  })
  navigate('/assignments')

}
})





}





  return (
 <div className="bg-white">
     <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
<div>
<h1 className="text-black font-bold mt-3"> Update Assignment 🔄:</h1>

<form onSubmit={handleupdate} >
<div className="flex  gap-7 mt-2">

<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3">Title</h1>
<input type="text" name="title" defaultValue={title} placeholder="Title here" className="input input-bordered input-info w-full " />
</div>

<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3">Marks</h1>
<input type="text" name="marks" defaultValue={marks} placeholder="Place Mark" className="input input-bordered input-info w-full " />
</div>

</div>

{/* ---- */}
<div className="flex  gap-7">

<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3">
Image URL</h1>
<input type="text" defaultValue={image} name="image" placeholder="Thumbnail 
Image URL" className="input input-bordered input-info w-full " />
</div>

<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3">Assignment difficulty level</h1>

<select name="Deficalty" id="" defaultValue={Deficalty} className="input input-bordered input-info w-full">
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
<input type="date" defaultValue={date} name="date" placeholder="Thumbnail 
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
<h1 className="text-xl font-bold text-black pt-4 pb-3">
Description </h1>
 <textarea name="description" defaultValue={description} id="" className="input input-bordered input-info w-full " ></textarea>

</div>


</div>

<input className="btn w-full my-8 mb-14 text-white" type="submit" value="🛠️ Update Assignments 🔧" />


</form>






</div>



    </div>
 </div>
  );
};

export default UpdateAssignment;