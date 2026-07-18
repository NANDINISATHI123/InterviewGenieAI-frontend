import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import PageTransition from "../components/PageTransition";
import AnimatedCard from "../components/AnimatedCard";


import {
  FileText,
  BrainCircuit,
  Trophy,
  TrendingUp
} from "lucide-react";


export default function Dashboard(){


return(

<PageTransition>

<div className="flex min-h-screen bg-slate-100">


<Sidebar/>


<div className="flex-1">


<Navbar/>


<div className="p-8 max-w-7xl mx-auto">


<h1 className="text-4xl font-bold">

Welcome to InterviewGenie AI 🚀

</h1>


<p className="text-gray-500 mt-2">

Prepare smarter with AI powered interview tools.

</p>





<div className="grid md:grid-cols-4 gap-6 mt-10">



<AnimatedCard>

<Card

icon={<FileText/>}

title="Resumes Uploaded"

value="12"

/>

</AnimatedCard>




<AnimatedCard>

<Card

icon={<BrainCircuit/>}

title="Mock Interviews"

value="25"

/>

</AnimatedCard>





<AnimatedCard>

<Card

icon={<TrendingUp/>}

title="ATS Score"

value="86%"

/>

</AnimatedCard>






<AnimatedCard>

<Card

icon={<Trophy/>}

title="Best Score"

value="95%"

/>

</AnimatedCard>



</div>





<div className="mt-10 grid lg:grid-cols-2 gap-8">


<AnimatedCard>

<div className="bg-white rounded-3xl shadow-xl p-8">


<h2 className="text-2xl font-bold">

Quick Actions

</h2>


<div className="mt-6 space-y-4">


<button className="w-full bg-indigo-600 text-white py-3 rounded-xl">

Upload Resume

</button>


<button className="w-full bg-green-600 text-white py-3 rounded-xl">

Start Mock Interview

</button>


<button className="w-full bg-black text-white py-3 rounded-xl">

Generate Questions

</button>


</div>


</div>


</AnimatedCard>





<AnimatedCard>

<div className="bg-white rounded-3xl shadow-xl p-8">


<h2 className="text-2xl font-bold">

Preparation Progress

</h2>


<div className="mt-6">


<Progress

name="DSA"

value={80}

/>


<Progress

name="Resume"

value={90}

/>


<Progress

name="Interview"

value={70}

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





function Card({
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

name,

value

}:any){

return(

<div className="mb-5">


<div className="flex justify-between">

<span>{name}</span>

<span>{value}%</span>

</div>



<div className="bg-gray-200 h-3 rounded-full mt-2">


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