import img from '../assets/bNNE_20231105_235247.png'

const Banner = () => {
  return (
    <div className='bg-white border-2 border-x-teal-800 rounded-lg  m-5 my-9'>
      <div className='flex flex-col lg:flex-row justify-center items-center '>

<div className='p-2'>
  <p className='text-black py-1'>Assignment Adventure Awaits</p>
<h1 className='text-teal-800 text-5xl font-bold '> Friends + Learning = Success </h1>
<p className='text-gray-500 text-xs'>Embark on an exciting assignment adventure with friends. <br /> Together, we learn.</p>

</div>


<div className='p-3 lg:py-14'>
  <img className='w-96' src={img} alt="" />
</div>


      </div>




    </div>
  );
};

export default Banner;