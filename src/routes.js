import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Dash from "views/Dash";
import Doctor from "views/Doctor";
import Review from "views/Review";
import AddEmployee from "views/AddEmployee";
import AddDoctor from "views/AddDoctor";
import Profile from "views/Profile";
import Edit from "views/Edit";
import ViewPatient from "views/ViewPatient";
import Login from "views/Login";
import Forgot from "views/Forgot";

var routes = [
  {
    path: "/Dash",
    name: "Dashboard",    
    icon: "tim-icons icon-chart-pie-36",
    component: <Dash />,
    layout: "/admin",
  },
  {
    path: "/Doctor",
    name: "Doctor",    
    icon: "tim-icons icon-single-02",
    component: <Doctor />,
    layout: "/admin",
  },
  {
    path: "/Review",
    name: "Review",    
    icon: "tim-icons icon-bulb-63",
    component: <Review />,
    layout: "/admin",
  },
  {
    path: "/Viewpatient",
    name: "View Patient",    
    icon: "tim-icons icon-bullet-list-67",
    component: <ViewPatient />,
    layout: "/admin",
  },
  {
    path: "/Addemployee",
    name: "Add Employee",    
    icon: "tim-icons icon-simple-add",
    component: <AddEmployee />,
    layout: "/admin",
  },
  {
    path: "/Adddoctor",
    name: "Add Doctor",    
    icon: "tim-icons icon-simple-add",
    component: <AddDoctor />,
    layout: "/admin",
  },
  {
    path: "/Profile",
    name: "Profile",    
    icon: "tim-icons icon-badge",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/Login",
    name: "Login",    
    icon: "tim-icons icon-bullet-list-67",
    component: <Login />,
    layout: "/admin",
  },
  {
    path: "/Forgot",
    name: "Forgot",    
    icon: "tim-icons icon-bullet-list-67",
    component: <Forgot />,
    layout: "/admin",
  },
  
];
export default routes;
