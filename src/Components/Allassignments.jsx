

const Allassignments = ({assignments}) => {
console.log(assignments);
const {Deficalty,date,description,email,image,marks,title,_id}=assignments;

  return (
    <div>
      
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>


    </div>
  );
};

export default Allassignments;