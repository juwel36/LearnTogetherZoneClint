import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/Login/LogIn";
import Regestraion from "../Pages/Regestraion/Regestraion";
import PrivetRoute from "../privetroutes/PrivetRoute";
import ErrorElement from "../Components/ErrorElement";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
{
path: '/',
element: <Home></Home>
},
{
  path: '/login',
  element: <LogIn></LogIn>
},
{
  path: '/regestraion',
  element: <Regestraion></Regestraion>
}




    ]
  },
]);



export default router