import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/Login/LogIn";
import Regestraion from "../Pages/Regestraion/Regestraion";
import PrivetRoute from "../privetroutes/PrivetRoute";
import ErrorElement from "../Components/ErrorElement";
import CreateAssignments from "../Components/CreateAssignments";
import Assignments from "../Components/Assignments";
import UpdateAssignment from "../Pages/update/UpdateAssignment";
import SubmitedAssignments from "../Pages/SubmittedAssignments/SubmitedAssignments";
import MyAssignment from "../Pages/myAssignment/MyAssignment";


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
},
{
path:'/createassignments',
element :<PrivetRoute> <CreateAssignments></CreateAssignments></PrivetRoute>
}
,
{
path : '/assignments',
element: <Assignments></Assignments>
}
,
{
path:'/updateAssignment/:id',
element:<UpdateAssignment></UpdateAssignment>,
loader: ({params})=> fetch(`http://localhost:5000/create/${params.id}`)
}
,
{
path:'/submittedassignments',
element:<SubmitedAssignments></SubmitedAssignments>
},
{
  path:'/myassignments',
  element: <MyAssignment></MyAssignment>
}



    ]
  },
]);



export default router