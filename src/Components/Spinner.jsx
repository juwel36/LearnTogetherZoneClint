import gif from '../assets/Magnify-1s-200px.gif'

const Spinner = () => {


  return (
    <div className='border-2'>
      <div className=' h-[80vh] flex justify-center'>
      <img className='p-32' src={gif} alt="Loading..." />
      </div>
    </div>
  );
};

export default Spinner;