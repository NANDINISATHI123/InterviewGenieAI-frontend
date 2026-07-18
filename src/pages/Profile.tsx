import { useEffect, useState } from "react";

import api from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import PageTransition from "../components/PageTransition";
import AnimatedCard from "../components/AnimatedCard";


import {
  User,
  Mail,
  FileText,
  Mic,
  Trophy,
  Code,
  Target
} from "lucide-react";



export default function Profile(){


const [profile,setProfile]=useState<any>(null);



useEffect(()=>{


loadProfile();


},[]);





async function loadProfile(){


try{


const email =
localStorage.getItem("email");


const response =
await api.get(

`/profile/${email}`

);



setProfile(
response.data
);


}

catch(error){

console.log(error);

}


}






if(!profile){


return(

<div className="flex min-h-screen bg-slate-100">

<Sidebar/>


<div className="flex-1">

<Navbar/>


<div className="p-10">

Loading Profile...

</div>


</div>


</div>

)

}





return(


<PageTransition>


<div className="flex min-h-screen bg-slate-100">


<Sidebar/>


<div className="flex-1">


<Navbar/>


<div className="max-w-7xl mx-auto p-8">





<h1 className="text-4xl font-bold">

My Profile

</h1>


<p className="text-gray-500 mt-2">

Manage your InterviewGenie AI profile.

</p>









{/* Profile Header */}




<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">


<div className="flex flex-col md:flex-row gap-6 items-center">


<div className="w-32 h-32 rounded-full bg-indigo-600 flex items-center justify-center">


<User

size={60}

className="text-white"

/>


</div>





<div>


<h2 className="text-3xl font-bold">

{profile.name}

</h2>


<div className="flex gap-2 items-center text-gray-500 mt-3">


<Mail size={18}/>


{profile.email}


</div>


</div>



</div>



</div>


</AnimatedCard>









{/* Statistics */}



<div className="grid md:grid-cols-3 gap-6 mt-8">



<AnimatedCard>


<StatCard

icon={<FileText/>}

title="Resume Uploads"

value={profile.resume_count}

/>


</AnimatedCard>





<AnimatedCard>


<StatCard

icon={<Mic/>}

title="Interview Attempts"

value={profile.interview_attempts}

/>


</AnimatedCard>





<AnimatedCard>


<StatCard

icon={<Trophy/>}

title="Average Score"

value={`${profile.average_score}%`}

/>


</AnimatedCard>



</div>









{/* Skills */}




<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">


<div className="flex gap-3 items-center">


<Code

className="text-indigo-600"

/>


<h2 className="text-2xl font-bold">

Technical Skills

</h2>


</div>





<div className="flex flex-wrap gap-4 mt-6">


{

[

"Python",

"React",

"JavaScript",

"SQL",

"FastAPI",

"Git",

"Machine Learning"

]

.map(skill=>(


<span

key={skill}

className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full"

>

{skill}

</span>


))


}



</div>


</div>


</AnimatedCard>









{/* Progress */}



<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">


<div className="flex gap-3">


<Target

className="text-green-600"

/>


<h2 className="text-2xl font-bold">

Preparation Progress

</h2>


</div>





<Progress

title="Resume Optimization"

value={90}

/>



<Progress

title="Coding Skills"

value={80}

/>




<Progress

title="Interview Skills"

value={75}

/>



</div>


</AnimatedCard>








</div>


</div>


</div>


</PageTransition>


)

}







function StatCard({

icon,

title,

value

}:any){


return(

<div className="bg-white rounded-3xl shadow-xl p-6">


<div className="text-indigo-600">

{icon}

</div>


<p className="text-gray-500 mt-4">

{title}

</p>


<h2 className="text-3xl font-bold mt-2">

{value}

</h2>


</div>

)

}








function Progress({

title,

value

}:any){


return(

<div className="mt-7">


<div className="flex justify-between">


<span>

{title}

</span>


<span>

{value}%

</span>


</div>




<div className="bg-gray-200 h-3 rounded-full mt-3">


<div

className="bg-indigo-600 h-3 rounded-full"

style={{

width:`${value}%`

}}

/>


</div>



</div>

)

}