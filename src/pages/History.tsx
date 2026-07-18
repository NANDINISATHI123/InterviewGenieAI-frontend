import { useEffect, useState } from "react";

import api from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import PageTransition from "../components/PageTransition";
import AnimatedCard from "../components/AnimatedCard";


import {
  FileText,
  Mic,
  Search,
  Star,
  MessageSquare
} from "lucide-react";



export default function History(){


const [activeTab,setActiveTab]=useState("resume");


const [resumes,setResumes]=useState<any[]>([]);

const [interviews,setInterviews]=useState<any[]>([]);


const [search,setSearch]=useState("");





useEffect(()=>{


loadHistory();


},[]);






async function loadHistory(){


try{


const email =
localStorage.getItem("email");



const resumeResponse =
await api.get(
"/resume-history"
);



const interviewResponse =
await api.get(
`/interview-history/${email}`
);



setResumes(
resumeResponse.data
);



setInterviews(
interviewResponse.data
);



}

catch(error){

console.log(error);

}



}









return(


<PageTransition>


<div className="flex min-h-screen bg-slate-100">


<Sidebar/>


<div className="flex-1">


<Navbar/>


<div className="max-w-7xl mx-auto p-8">






<h1 className="text-4xl font-bold">

Activity History

</h1>


<p className="text-gray-500 mt-2">

View your previous resume analysis and interviews.

</p>









{/* Tabs */}



<div className="flex gap-4 mt-8">


<button


onClick={()=>setActiveTab("resume")}


className={`px-6 py-3 rounded-xl flex gap-2 items-center

${

activeTab==="resume"

?

"bg-indigo-600 text-white"

:

"bg-white"

}

`}


>


<FileText/>

Resume History


</button>






<button


onClick={()=>setActiveTab("interview")}


className={`px-6 py-3 rounded-xl flex gap-2 items-center

${

activeTab==="interview"

?

"bg-indigo-600 text-white"

:

"bg-white"

}

`}


>


<Mic/>

Interview History


</button>



</div>








{/* Search */}



<div className="bg-white rounded-xl flex items-center px-4 mt-8 shadow">


<Search/>


<input


placeholder="Search history..."


value={search}


onChange={(e)=>

setSearch(e.target.value)

}


className="w-full p-4 outline-none"


/>


</div>









{/* Resume History */}




{

activeTab==="resume"

&&


<div className="grid md:grid-cols-2 gap-6 mt-8">


{

resumes

.filter(item=>

item.filename

.toLowerCase()

.includes(

search.toLowerCase()

)

)


.map(item=>(


<AnimatedCard

key={item.id}

>


<div className="bg-white rounded-3xl shadow-xl p-6">


<div className="flex gap-3 items-center">


<FileText

className="text-indigo-600"

/>


<h2 className="font-bold text-xl">

{item.filename}

</h2>


</div>




<p className="mt-5 text-gray-600 whitespace-pre-wrap">


{item.analysis}


</p>


</div>



</AnimatedCard>



))


}



</div>



}









{/* Interview History */}




{

activeTab==="interview"

&&


<div className="space-y-6 mt-8">



{


interviews

.filter(item=>

item.question

.toLowerCase()

.includes(

search.toLowerCase()

)

)


.map(item=>(



<AnimatedCard

key={item.id}

>


<div className="bg-white rounded-3xl shadow-xl p-7">





<div className="flex gap-3 items-center">


<MessageSquare

className="text-green-600"

/>


<h2 className="font-bold text-xl">

Question

</h2>


</div>



<p className="mt-3">

{item.question}

</p>





<h3 className="font-bold mt-6">

Your Answer

</h3>


<p className="text-gray-600 mt-2">

{item.answer}

</p>







<div className="mt-6 bg-indigo-50 rounded-xl p-5">


<h3 className="font-bold">

AI Feedback

</h3>


<p className="mt-2 whitespace-pre-wrap">

{item.feedback}

</p>


</div>







<div className="flex gap-2 items-center mt-5">


<Star className="text-yellow-500"/>


<span className="font-bold">

Score: {item.score || "Pending"}

</span>


</div>





</div>


</AnimatedCard>



))


}



</div>


}






</div>


</div>


</div>


</PageTransition>


)

}