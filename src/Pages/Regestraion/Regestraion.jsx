import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import img from '../../assets/141.jpg'

const Regestraion = () => {




  return (
  <div className='bg-white'>
<Navbar></Navbar>
<div className='max-w-6xl mx-auto'>
      
<div className="hero min-h-screen ">
<div className="hero-content flex-col-reverse lg:flex-row">
<div className="text-center lg:text-left">
<img className='w-[700px]' src={img} alt="" />
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-teal-800">


<form className="card-body ">
<div className="form-control">
    <label className="label">
      <span className="label-text font-semibold text-white">Your Name</span>
    </label>
    <input type="text" name="name" placeholder="name" className="input input-bordered"  />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text font-semibold text-white">Image URL</span>
    </label>
    <input type="text" name="image" placeholder="image url" className="input input-bordered" />
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text text-white">Email</span>
    </label>
    <input type="email" placeholder="email" className="input input-bordered" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-white">Password</span>
    </label>
    <input type="password" placeholder="password" className="input input-bordered" required />
    <label className="label">
    <p href="#" className="label-text-alt  ">Already Have an account ?<span className='text-black'> <Link to='/login'>Log In</Link></span> </p>
    </label>
  </div>
  <div className="form-control mt-6">
    <button className="btn bg-blue-700 border-0 text-white">Regester now</button>
  </div>
</form>
</div>
</div>
</div>


</div>
     
  </div>
  );
};

export default Regestraion;