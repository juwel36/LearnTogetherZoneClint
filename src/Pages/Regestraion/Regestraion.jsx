import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import img from '../../assets/141.jpg'
import gimg from '../../assets/google.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Authproder/Authprovider';
import Swal from 'sweetalert2';

const Regestraion = () => {
  const {createuser,googleAuth,updateprofile} =useContext(AuthContext)
  const [showerror,setshowerror]=useState(null)
  const navigate=useNavigate()

const handleregestraion = e =>{
  e.preventDefault()
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  console.log(email,password,name,image);

  setshowerror('')
  if (password.length < 6) {
    return setshowerror("Your password must be at least 6 characters long!");
  }

  createuser(email,password)
  .then(res=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: ' Successfully Regestered',
      showConfirmButton: false,
      timer: 1500
    })
  
    navigate('/')
  })
  .catch(error=>{
    console.log(error);
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'you already Regestered !!!!!!',
      showConfirmButton: false,
      timer: 1500
    })
  })

}

const handlegoogleLogin =()=>{
  googleAuth()
  .then(res=> {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: ' Successfully Log In',
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/')
  })
  .catch(error=>{
    console.log(error);
  })


}


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


<form onSubmit={handleregestraion} className="card-body ">
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
    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-white">Password</span>
    </label>
    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
    <label className="label">
    <p href="#" className="label-text-alt  ">Already Have an account ?<span className='text-black'> <Link to='/login'>Log In</Link></span> </p>
    </label>
    <p> {showerror} </p>
  </div>
  <div className="form-control mt-6">
    <button className="btn bg-blue-700 border-0 text-white">Regester now</button>
  </div>
</form>
<div>
      <button onClick={handlegoogleLogin}
  className="mb-3 flex select-none bg-sky-900 mx-auto items-center gap-3 rounded-lg border-b-2 border-blue-gray-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-red-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  type="button"
  data-ripple-dark="true"
>
  <img src={gimg} alt="metamask" className="h-6 w-6" />
  Continue with Google
</button>
      </div>
</div>
</div>
</div>


</div>
     
  </div>
  );
};

export default Regestraion;