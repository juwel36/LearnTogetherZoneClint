import { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Authproder/Authprovider";
import { Link } from "react-router-dom";

const SubmitedAssignments = () => {

  const {user}=useContext(AuthContext)
  const [data, setData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("pending");

  const { data: assignments = [], isPending, error } = useQuery({
    queryKey: ['assignments'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/submit');
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

 // Function to fetch a single item



  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/create/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          
          setData((prevData) => {
            const updatedBooking = prevData.find((booking) => booking._id === id);
            if (updatedBooking) {
              updatedBooking.status = 'confirm';
            }
            return [...prevData];
          });
        }
      });
  };

  const filteredData = data.filter((item) => item.status === statusFilter);











  return (
    <div>
      <Navbar></Navbar>

      <h1>Filtered Data for Status: {statusFilter}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {filteredData.map((item) => (
          <div key={item._id} className="card lg:card-side bg-white text-black shadow-xl">
            <figure><img className="w-40 h-40" src={item.photo} alt="Album" /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-teal-800"> User Name : {user.displayName} </h2>
              <h2 className="card-title">Title: {item.dataTitle} </h2>
              <p> {item.initalMarks}  </p>


              <div className="card-actions justify-end">

<Link to={`/givemark/${item._id}`}>  <button className="btn"> Give Mark </button> </Link>



                <button onClick={() => handleConfirm(item._id)} className="btn bg-sky-900 text-white">{item.status}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmitedAssignments;
