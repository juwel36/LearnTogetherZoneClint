import axios from "axios";
import Navbar from "./Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import Allassignments from "./Allassignments";
import { useContext, useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authproder/Authprovider";


const Assignments = () => {
  const {user}=useContext(AuthContext)
  //  paigination
    const { count } = useLoaderData()
    
    const [data, setData] = useState([]);
    const [itemsPerPage, setitemsperPage] = useState(2)
    const [currentPage,setCurrentPage]=useState(0)
    
    const [selectedDifficulty, setSelectedDifficulty] = useState('Easy');  

const [pages,setPages]=useState([])

     
  const { data: assignments = {}, isPending, error } = useQuery({
    queryKey: ['assignments', currentPage, itemsPerPage,selectedDifficulty],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/create?page=${currentPage}&size=${itemsPerPage}&difficulty=${selectedDifficulty}`
      );
    return res.data;
  }
});

  
  useEffect(() => {
    if (assignments) {
      setData(assignments.result);
    }

    
    if(assignments.count){
      const numberOfPages = Math.ceil(assignments.count / itemsPerPage)
      const p = [...Array(numberOfPages).keys()];
      setPages(p)
      
    }
    console.log(assignments);
  }, [assignments]);
  



  const filteredAssignments = assignments.result?.filter(
    (assignment) => assignment.Deficalty === selectedDifficulty
  ); 
  if (isPending) {
    return  <div><Spinner></Spinner></div> ;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }



  // const handleitemPerPage=(e)=>{
  //   const valu =parseInt(e.target.value)
  //   setitemsperPage(valu)
  //   setCurrentPage(0)
  // }


  const handlePrevious = ()=>{
    if(currentPage > 0){
        setCurrentPage(currentPage-1)
    }
}


const handleNext =()=>{
  if(currentPage < pages.length -1 ){
      setCurrentPage(currentPage+1)
  }
  
  }



  const handleDelete = (id) => {
    
    const updatedAssignments = assignments.filter((assignment) => assignment._id !== id);
   
    setData(updatedAssignments);
  };

const useremail=user?.email;



  return (
 <div className="bg-white pb-96 ">
<Navbar></Navbar>
     <div className="max-w-6xl mx-auto">
<div className="">
<h1 className="text-xl font-bold text-black pt-4 pb-3">Filter using difficulty level</h1>
<select name="Deficalty" id=""  onChange={(e) => {
              setSelectedDifficulty(e.target.value);
              setCurrentPage(0); 
            }} className="input input-bordered input-info ">
  <option value="Easy">Easy</option>
  <option value="Medium">Medium</option>
  <option value="Hard">Hard</option>
</select>

</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-7">
{filteredAssignments.map((res) => (
          <Allassignments key={res._id} assignments={res} user={useremail} onDelete={handleDelete} ></Allassignments>
        ))}


</div>
<div id="paigination" className="text-center">

<button className="btn mr-2" onClick={handlePrevious}> Pre </button>
{
        pages.map(page => <button className="btn mr-2 my-16 "
          key={page}
          onClick={()=> setCurrentPage(page)}
          id={currentPage === page && 'selected'}
          >{page} </button>)
      }
<button className="btn" onClick={handleNext}>Next</button>

{/* <select name="" value={itemsPerPage} hidden onChange={handleitemPerPage} id="">
<option value="3">3</option>
<option value="5">5</option>
<option value="10">10</option>
<option value="20">20</option>
<option value="50">50</option>

</select> */}


</div>
      
    </div>
 </div>
  );
};

export default Assignments;