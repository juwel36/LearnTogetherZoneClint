import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const SubmitedAssignments = () => {
  const [data, setData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("pending");

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
          // Update the data state with the modified booking
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
      <div>
        {filteredData.map((item) => (
          <div key={item._id} className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-40 h-40" src={item.image} alt="Album" /></figure>
            <div className="card-body">
              <h2 className="card-title"> {item.title} </h2>
              <p>Click the button to listen on Spotify app.</p>
              <div className="card-actions justify-end">
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
