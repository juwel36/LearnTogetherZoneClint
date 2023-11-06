import axios from "axios";
import Navbar from "./Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import Allassignments from "./Allassignments";
import { useState } from "react";
import Spinner from "./Spinner";


const Assignments = () => {
  const { data: assignments=[], isPending, error, } = useQuery({
    queryKey: ['assignments'],
    queryFn: async () => {
     const res= await axios.get('http://localhost:5000/create')
     return res.data
    }
  })
  
  
 
  
  const [selectedDifficulty, setSelectedDifficulty] = useState('Easy'); 

  const filteredAssignments = assignments.filter(
    (assignment) => assignment.Deficalty === selectedDifficulty
  ); 


  if (isPending) {
    return  <div><Spinner></Spinner></div> ;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
 <div className="bg-white pb-96 ">
     <div className="max-w-6xl mx-auto">
<Navbar></Navbar>
<div className="">
<h1 className="text-xl font-bold text-black pt-4 pb-3">Filter using difficulty level</h1>
<select name="Deficalty" id="" onChange={(e) => setSelectedDifficulty(e.target.value)} className="input input-bordered input-info ">
  <option value="Easy">Easy</option>
  <option value="Medium">Medium</option>
  <option value="Hard">Hard</option>
</select>

</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-7">
{filteredAssignments.map((res) => (
          <Allassignments key={res._id} assignments={res} ></Allassignments>
        ))}


</div>

      
    </div>
 </div>
  );
};

export default Assignments;