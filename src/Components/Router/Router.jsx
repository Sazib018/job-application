import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts";
import Error from "../Pages/Error/Error";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import JobDetails from "../Pages/JobDetails/JobDetails";
import SeeAllJobs from "../Home/seeAllJobs/seeAllJobs";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayouts></Mainlayouts>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/seeAllJobs",
                element:<SeeAllJobs></SeeAllJobs>
            },
            {
                path:"/jobs/:id",
                element:<JobDetails></JobDetails>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
        ]
    }
])