import gif from '../assets/Magnify-1s-200px.gif'

const Spinner = () => {


  return (
    <div className=''>
      <div className=' h-[80vh] flex justify-center bg-white'>
      <img className='p-24 ' src={gif} alt="Loading..." />
      </div>
    </div>
  );
};

export default Spinner;