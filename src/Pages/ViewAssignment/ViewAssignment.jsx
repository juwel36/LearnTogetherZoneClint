import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Navbar/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Authproder/Authprovider";
import Swal from "sweetalert2";
import axios from "axios";


const ViewAssignment = () => {
  const {Deficalty,date,description,image,marks,title,_id}=useLoaderData(null);
const {user}=useContext(AuthContext)


const handletakeassignment = (e) => {
  e.preventDefault();
  const pdf = e.target.pdf.value;
  const note = e.target.note.value;
  const email=user.email
  const status=  "pending"
  const userData = {
    pdf,
    note,
    email,
    status
  };
  console.log(userData);

  axios.post('http://localhost:5000/submit',userData)
.then(res=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: ' Take assignment succesfull ',
    showConfirmButton: false,
    timer: 1500
  })

  
})

  
};






  return (
 <div className="bg-white ">
     <div className="max-w-6xl mx-auto pb-14">
      <Navbar></Navbar>
<div className="text-black pt-10">

<div className="flex">
<div className="w-2/4">
  <img className="w-96 h-72" src={image} alt="" />
</div>
<div className=" ">
<p className="text-4xl font-semibold py-2"> {title} </p>
<p className="py-2"> submited: {date} </p>
<p className="py-2"> Deficalty Level: {Deficalty}  </p>
<p className="py-2"> Marks: {marks}  </p>

<button className="btn"> convert as a pdf </button>

<button className="btn ml-2 text-white bg-teal-800" onClick={()=>document.getElementById('my_modal_1').showModal()}>Take
assignment</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-white text-black">

<form onSubmit={handletakeassignment}> 
  <div>
<p className="font-bold text-lg"> PDF Link </p>
<input type="text" name="pdf" placeholder="Drop your pdf link" className="input bg-teal-700 text-black input-primary w-full max-w-xs" />
  </div>
  
  <div>
<p className="font-bold text-lg">  Quick note </p>
<input type="text" name="note" placeholder="write quick note" className="input bg-teal-700 text-black input-primary w-full max-w-xs" />
  </div>
  
  <input type="submit" className="btn  mt-5" value="Submit" />
  
   </form>

    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

</div>


</div>

<p className="text-lg font-medium pt-9"> {description}  </p>



</div>


    </div>

    <Footer></Footer>
 </div>
  );
};

export default ViewAssignment;