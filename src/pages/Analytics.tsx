import { useEffect, useState } from "react";

import api from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import PageTransition from "../components/PageTransition";
import AnimatedCard from "../components/AnimatedCard";


import {
  FileText,
  BrainCircuit,
  TrendingUp,
  Target,
  Award
} from "lucide-react";



export default function Analytics(){


const [data,setData]=useState<any>(null);



useEffect(()=>{


loadAnalytics();


},[]);





async function loadAnalytics(){


try{


const email =
localStorage.getItem("email");



const response = await api.get(

`/analytics/${email}`

);



setData(
response.data
);


}

catch(error){

console.log(error);

}


}







if(!data){


return(

<div className="flex min-h-screen bg-slate-100">

<Sidebar/>

<div className="flex-1">

<Navbar/>

<div className="p-10">

Loading Analytics...

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

Performance Analytics 📊

</h1>


<p className="text-gray-500 mt-2">

Track your interview preparation progress.

</p>








{/* Stats */}



<div className="grid md:grid-cols-3 gap-6 mt-10">



<AnimatedCard>

<StatCard

icon={<FileText/>}

title="Total Resumes"

value={data.total_resumes}

/>

</AnimatedCard>






<AnimatedCard>

<StatCard

icon={<BrainCircuit/>}

title="Interviews"

value={data.total_interviews}

/>

</AnimatedCard>







<AnimatedCard>

<StatCard

icon={<Award/>}

title="Average Score"

value={`${data.average_score}%`}

/>

</AnimatedCard>




</div>









{/* Progress */}




<div className="grid lg:grid-cols-2 gap-8 mt-10">



<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8">


<h2 className="text-2xl font-bold">

Preparation Progress

</h2>




<Progress

title="Resume Optimization"

value={85}

/>


<Progress

title="Technical Skills"

value={75}

/>


<Progress

title="Interview Confidence"

value={70}

/>



</div>


</AnimatedCard>









<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8">


<h2 className="text-2xl font-bold">

AI Insights

</h2>




<div className="mt-6 space-y-5">


<Insight

icon={<TrendingUp/>}

text="Your interview practice is improving"

/>



<Insight

icon={<Target/>}

text="Focus more on project explanations"

/>



<Insight

icon={<Award/>}

text="Maintain ATS optimized resume"

/>



</div>



</div>


</AnimatedCard>




</div>









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







function Insight({

icon,

text

}:any){


return(

<div className="flex gap-4 items-center bg-indigo-50 p-4 rounded-xl">


<div className="text-indigo-600">

{icon}

</div>


<p>

{text}

</p>


</div>

)

}