import img from '../assets/pngwing.com (6).png'

const ErrorElement = () => {


  const handleback =()=> {

    window.history.back();
  }


  return (
    <div>
       <div>
<div className='flex items-center justify-center'>
  <img className='w-96' src={img} alt="" />
</div>

        <div>

      <h1 className="text-center font-bold text-3xl ">Uppppps !</h1>
      <p className="text-center  mt-9">Somthing Wrong</p>
      <div className="flex items-center justify-center mt-9">
        <button className='btn bg-red-500 text-black' onClick={handleback} >Go Back</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ErrorElement;