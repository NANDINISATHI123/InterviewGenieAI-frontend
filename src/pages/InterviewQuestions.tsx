import { useState } from "react";

import api from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import PageTransition from "../components/PageTransition";
import AnimatedCard from "../components/AnimatedCard";


import {
  Sparkles,
  Loader2,
  Copy,
  Search,
  BrainCircuit
} from "lucide-react";



export default function InterviewQuestions(){


const [file,setFile]=useState<File | null>(null);

const [questions,setQuestions]=useState("");

const [loading,setLoading]=useState(false);

const [search,setSearch]=useState("");





async function generateQuestions(){


if(!file){

alert("Please upload resume");

return;

}



const formData=new FormData();


formData.append(
"resume",
file
);



setLoading(true);



try{


const response = await api.post(

"/generate-questions",

formData,

{

headers:{

"Content-Type":
"multipart/form-data"

}

}

);



setQuestions(
response.data.questions
);


}

catch(error){

console.log(error);

alert(
"Unable to generate questions"
);


}

finally{


setLoading(false);


}


}






function copyText(){


navigator.clipboard.writeText(
questions
);


alert(
"Questions copied"
);


}







return(


<PageTransition>


<div className="flex min-h-screen bg-slate-100">


<Sidebar/>


<div className="flex-1">


<Navbar/>


<div className="max-w-7xl mx-auto p-8">





<h1 className="text-4xl font-bold">

AI Interview Questions Generator

</h1>


<p className="text-gray-500 mt-2">

Generate interview questions based on your resume.

</p>







{/* Upload Section */}



<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">



<div className="flex gap-3 items-center">


<BrainCircuit

className="text-indigo-600"

/>


<h2 className="text-2xl font-bold">

Upload Resume

</h2>


</div>




<div className="mt-6 flex flex-col md:flex-row gap-5">


<input


type="file"


accept=".pdf"


onChange={(e)=>{

if(e.target.files){

setFile(
e.target.files[0]
)

}

}}


className="border p-3 rounded-xl"

/>




<button


onClick={generateQuestions}


disabled={loading}


className="bg-indigo-600 text-white px-8 py-3 rounded-xl flex items-center gap-3"



>


{


loading ?

<>

<Loader2 className="animate-spin"/>

Generating...

</>


:

<>

<Sparkles/>

Generate

</>


}


</button>



</div>



</div>


</AnimatedCard>









{/* Search + Questions */}




{

questions &&


<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">



<div className="flex flex-col md:flex-row justify-between gap-5">



<h2 className="text-2xl font-bold">

Generated Questions

</h2>




<button


onClick={copyText}


className="bg-black text-white px-5 py-3 rounded-xl flex gap-2 items-center"


>


<Copy/>

Copy All


</button>


</div>






<div className="flex items-center border rounded-xl px-4 mt-6">


<Search/>

<input


placeholder="Search questions..."


value={search}


onChange={(e)=>

setSearch(e.target.value)

}


className="w-full p-3 outline-none"

/>


</div>








<div className="mt-8 space-y-5">



{

questions

.split("\n")

.filter((line)=>

line.toLowerCase()

.includes(

search.toLowerCase()

)

)


.map((item,index)=>(


<div


key={index}


className="border rounded-2xl p-5 hover:shadow-lg transition"



>


<div className="flex justify-between">


<h3 className="font-semibold">


Question {index+1}


</h3>


<span className="text-indigo-600">

AI

</span>


</div>



<p className="mt-3 text-gray-700">

{item}

</p>



</div>



))


}



</div>




</div>


</AnimatedCard>


}







</div>


</div>


</div>


</PageTransition>


)

}