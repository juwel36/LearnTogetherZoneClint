import axios from "axios";
import Navbar from "./Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import Allassignments from "./Allassignments";


const Assignments = () => {

  const { data: assignments=[], isPending, error, } = useQuery({
    queryKey: ['assignments'],
    queryFn: async () => {
     const res= await axios.get('http://localhost:5000/create')
      console.log(res.data);
      return res.data
    }
  })

  console.log(assignments);
  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div className="max-w-6xl mx-auto">
<Navbar></Navbar>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
{
  assignments.map(res=> <Allassignments key={res.user} assignments={res} ></Allassignments> )
}


</div>

      
    </div>
  );
};

export default Assignments;