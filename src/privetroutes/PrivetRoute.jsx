import { useContext } from "react";
import { AuthContext } from "../Authproder/Authprovider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext)


  if(loading){
    return <div className="flex justify-center items-center">
      <span className="loading loading-ring loading-lg text-white"></span>
    </div>
  }
  
  if(user){
    return children
  }
  
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;