import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import PageTransition from "../components/PageTransition";
import AnimatedCard from "../components/AnimatedCard";


import {
  Moon,
  Bell,
  LogOut,
  Trash2,
  User,
  Save,
  Shield
} from "lucide-react";



export default function Settings(){


const [darkMode,setDarkMode]=useState(false);


const [notifications,setNotifications]=useState(true);





function logout(){


localStorage.clear();


window.location.href="/login";


}






return(


<PageTransition>


<div className="flex min-h-screen bg-slate-100">


<Sidebar/>


<div className="flex-1">


<Navbar/>


<div className="max-w-7xl mx-auto p-8">





<h1 className="text-4xl font-bold">

Settings

</h1>


<p className="text-gray-500 mt-2">

Manage your InterviewGenie AI preferences.

</p>








{/* Appearance */}



<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">


<div className="flex items-center gap-3">


<Moon

className="text-indigo-600"

/>


<h2 className="text-2xl font-bold">

Appearance

</h2>


</div>





<div className="flex justify-between items-center mt-6">


<div>


<h3 className="font-semibold">

Dark Mode

</h3>


<p className="text-gray-500">

Enable dark theme

</p>


</div>





<button


onClick={()=>setDarkMode(!darkMode)}


className={`w-16 h-8 rounded-full p-1 transition

${

darkMode

?

"bg-indigo-600"

:

"bg-gray-300"

}

`}



>


<div


className={`bg-white w-6 h-6 rounded-full transition

${

darkMode

?

"translate-x-8"

:

""

}

`}



/>


</button>



</div>



</div>


</AnimatedCard>









{/* Notifications */}




<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">



<div className="flex gap-3 items-center">


<Bell

className="text-green-600"

/>


<h2 className="text-2xl font-bold">

Notifications

</h2>


</div>






<div className="flex justify-between mt-6">


<div>


<h3 className="font-semibold">

Email Alerts

</h3>


<p className="text-gray-500">

Receive interview updates

</p>


</div>





<input


type="checkbox"


checked={notifications}


onChange={(e)=>

setNotifications(
e.target.checked
)

}


className="w-5 h-5"

/>



</div>


</div>


</AnimatedCard>









{/* Profile Settings */}



<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">



<div className="flex gap-3">


<User

className="text-indigo-600"

/>


<h2 className="text-2xl font-bold">

Profile Information

</h2>


</div>






<div className="grid md:grid-cols-2 gap-5 mt-6">



<input

placeholder="Name"

className="border rounded-xl px-4 py-3"

/>





<input

placeholder="Email"

className="border rounded-xl px-4 py-3"

/>



</div>






<button


className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl flex gap-2 items-center"


>


<Save size={18}/>


Save Changes


</button>



</div>


</AnimatedCard>









{/* Security */}




<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">



<div className="flex gap-3">


<Shield

className="text-purple-600"

/>


<h2 className="text-2xl font-bold">

Security

</h2>


</div>




<input


type="password"


placeholder="New Password"


className="border rounded-xl px-4 py-3 mt-6 w-full"

/>





<button


className="mt-5 bg-green-600 text-white px-6 py-3 rounded-xl"


>


Update Password


</button>



</div>


</AnimatedCard>









{/* Danger Zone */}



<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">


<h2 className="text-2xl font-bold">

Danger Zone

</h2>




<div className="flex flex-col md:flex-row gap-5 mt-6">



<button


onClick={logout}


className="bg-red-500 text-white px-6 py-3 rounded-xl flex gap-3 items-center"


>


<LogOut/>

Logout


</button>






<button


className="bg-black text-white px-6 py-3 rounded-xl flex gap-3 items-center"


>


<Trash2/>

Delete Account


</button>




</div>



</div>


</AnimatedCard>







</div>


</div>


</div>


</PageTransition>


)

}