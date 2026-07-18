import {
  LayoutDashboard,
  FileText,
  BrainCircuit,
  MessageSquare,
  BarChart3,
  History,
  User,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";



export default function Sidebar(){


const [open,setOpen]=useState(false);

const navigate=useNavigate();



function logout(){

localStorage.clear();

navigate("/login");

}






const menuItems=[


{
name:"Dashboard",
path:"/dashboard",
icon:<LayoutDashboard size={20}/>
},


{
name:"Resume Analysis",
path:"/resume-analysis",
icon:<FileText size={20}/>
},


{
name:"Interview Questions",
path:"/interview-questions",
icon:<BrainCircuit size={20}/>
},


{
name:"Mock Interview",
path:"/mock-interview",
icon:<MessageSquare size={20}/>
},


{
name:"Analytics",
path:"/analytics",
icon:<BarChart3 size={20}/>
},


{
name:"History",
path:"/history",
icon:<History size={20}/>
},


{
name:"Profile",
path:"/profile",
icon:<User size={20}/>
},


{
name:"Settings",
path:"/settings",
icon:<Settings size={20}/>
},


];








return(

<>



{/* Mobile Menu Button */}


<button


onClick={()=>setOpen(true)}


className="md:hidden fixed top-5 left-5 z-50 bg-indigo-600 text-white p-3 rounded-xl"


>


<Menu/>


</button>








{/* Overlay */}



{

open &&

<div


onClick={()=>setOpen(false)}


className="fixed inset-0 bg-black/40 z-40 md:hidden"

/>


}









<aside


className={`

fixed md:static

top-0 left-0

h-screen

w-72

bg-white

shadow-xl

z-50

transition-transform duration-300


${

open

?

"translate-x-0"

:

"-translate-x-full md:translate-x-0"

}

`}


>







{/* Logo */}



<div className="p-6 border-b">


<div className="flex items-center justify-between">


<h1 className="text-2xl font-bold text-indigo-600">


InterviewGenie AI 🚀


</h1>



<button


onClick={()=>setOpen(false)}


className="md:hidden"


>


<X/>


</button>



</div>


<p className="text-sm text-gray-500 mt-2">


AI Interview Preparation


</p>


</div>









{/* Navigation */}



<div className="p-5 space-y-2">


{

menuItems.map((item)=>(


<NavLink


key={item.name}


to={item.path}


onClick={()=>setOpen(false)}


className={({isActive})=>

`

flex items-center gap-4

px-4 py-3

rounded-xl

transition


${

isActive

?

"bg-indigo-600 text-white shadow-lg"

:

"text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"

}

`

}



>


{item.icon}


<span className="font-medium">

{item.name}

</span>



</NavLink>


))


}



</div>









{/* Bottom Section */}



<div className="absolute bottom-0 w-full p-5 border-t">


<button


onClick={logout}


className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50"


>


<LogOut size={20}/>


Logout


</button>



</div>







</aside>


</>

)

}