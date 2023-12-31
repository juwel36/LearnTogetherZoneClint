import { useContext } from "react";
// import { AuthContext } from "../Authproder/Authprovider";
import { Navigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { AuthContext } from "../Authproder/Authprovider";


const PrivetRoute = ({children}) => {
  
  const {user,loading}=useContext(AuthContext)

  if(loading){
    return <div className="flex justify-center items-center">
     <Spinner></Spinner>
    </div>
  }
  
  if(user){
    return children
  }
  
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;