import { Link } from "react-router-dom";


const Allassignments = ({assignments}) => {
console.log(assignments);
const {Deficalty,date,description,email,image,marks,title,_id}=assignments;

  return (
    <div>
      
      <div className="card lg:card-side bg-base-100 text-white shadow-xl">
  <figure><img className="w-52 " src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Marks: {marks}</p>
    <p>Difficulty level: <span className="font-semibold text-xl"> {Deficalty} </span> </p>
    <div className=" flex gap-2">
      <button className="btn bg-teal-800 text-white">View Assignment</button>
      <Link to={`/updateAssignment/${_id}`}> <button className="btn bg-teal-800 text-xs text-white">Update Assignment</button> </Link>
      
    </div>
  </div>
</div>


    </div>
  );
};

export default Allassignments;