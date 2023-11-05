import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";


const MyAssignment = () => {

  const [data, setData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("confirm");

  const { data: assignments = [], isPending, error } = useQuery({
    queryKey: ['assignments'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/create');
      return res.data;
    }
  });

  useEffect(() => {
    if (assignments) {
      setData(assignments);
    }
  }, [assignments]);

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }


  const filteredData = data.filter((item) => item.status === statusFilter);

  const handleremove = (id) =>{
    console.log(id);
  
   
  fetch(`http://localhost:5000/create/${id}`,{
  method:'DELETE',
  })
  .then(res=> res.json())
  .then(data=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: ' Delete succesfully',
      showConfirmButton: false,
      timer: 2000
    })
    console.log(data);
  
    setData((prevUser) => prevUser.filter((item) => item._id !== id));
  })
  }



  return (
   <div className="bg-white">
     <div className="max-w-6xl mx-auto">
<Navbar></Navbar>

<div className="grid grid-cols-1 gap-5 mt-6">
        {filteredData.map((item) => (
          <div key={item._id} className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-40 h-40" src={item.image} alt="Album" /></figure>
            <div className="card-body">
              <h2 className="card-title"> {item.title} </h2>
              <p>Click the button to listen on Spotify app.</p>
              <div className="card-actions justify-end">
                <button onClick={()=>handleremove(item._id)} className="btn bg-sky-900 text-white"> Delete 🚮 </button>
                <button className="btn bg-sky-900 text-white">{item.status}</button>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
   </div>
  );
};

export default MyAssignment;