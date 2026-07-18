import { 
  Search,
  Bell,
  Moon,
  Sun,
  User,
  LogOut,
  ChevronDown
} from "lucide-react";

import { useState } from "react";



export default function Navbar(){


const [dark,setDark]=useState(false);

const [open,setOpen]=useState(false);



const name =
localStorage.getItem("name") || "User";



function logout(){

localStorage.clear();

window.location.href="/login";

}




return(

<nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">





{/* Left */}

<div>


<h1 className="text-xl font-bold">

Welcome back, {name} 👋

</h1>


<p className="text-sm text-gray-500">

Ready for your next interview?

</p>


</div>









{/* Search */}


<div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-96">


<Search

size={20}

className="text-gray-500"

/>


<input


placeholder="Search anything..."


className="bg-transparent outline-none px-3 w-full"



/>


</div>









{/* Right Section */}



<div className="flex items-center gap-5">





{/* Dark Mode */}



<button


onClick={()=>setDark(!dark)}


className="p-3 rounded-full hover:bg-gray-100"


>


{


dark ?

<Sun/>

:

<Moon/>

}


</button>








{/* Notification */}



<button


className="relative p-3 rounded-full hover:bg-gray-100"


>


<Bell/>


<span className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">


3


</span>


</button>









{/* Profile Dropdown */}



<div className="relative">


<button


onClick={()=>setOpen(!open)}


className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-xl"


>


<div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">


<User

className="text-white"

/>


</div>




<div className="hidden md:block text-left">


<p className="font-semibold">

{name}

</p>


<p className="text-xs text-gray-500">

Candidate

</p>


</div>




<ChevronDown size={18}/>


</button>








{


open &&


<div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl p-3">



<button


className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg"


>


Profile


</button>





<button


onClick={logout}


className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-600 rounded-lg flex gap-2 items-center"


>


<LogOut size={18}/>


Logout


</button>





</div>



}



</div>





</div>



</nav>


)

}