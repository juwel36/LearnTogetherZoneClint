import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Feature = () => {
  const { data: assignments = [], isPending, error } = useQuery({
    queryKey: ['assignments'],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/create");
      return res.data;
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const featuredAssignments = assignments.filter(
    (item) => item.Spotlight.trim() === "Featured"
  );

  return (

<div className="mb-16">
  <h1 className="text-3xl py-3 font-serif mt-16  text-black">Feature section</h1>
  <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {featuredAssignments.map((assignment) => (
      
<div key={assignment._id} className="card border-2 p-1">
  <figure><img className="h-36 w-full" src={assignment.image}alt="car!"/></figure>
  <div className="text-black">
    <div className="h-36">
    <h2 className="card-title p-"> {assignment.title} </h2>
    <div className="my-2">
      <p> Dificalty Level :{assignment.Deficalty} </p>
      <p>Posted Date : {assignment.date} </p>
    </div>
    </div>
    <div className="card-actions justify-end">
    <Link to={`/ViewAssignment/${assignment._id}`}> <button className="py-1 px-2 rounded-lg bg-teal-800 text-white">View Assignment</button> </Link>
     
    </div>
  </div>
</div>

      ))}
    </div>


</div>
  
  );
};

export default Feature;
