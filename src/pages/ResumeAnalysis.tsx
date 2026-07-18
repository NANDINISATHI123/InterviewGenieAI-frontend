import { useState } from "react";

import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Sparkles
} from "lucide-react";

import toast from "react-hot-toast";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import api from "../services/api";

import PageTransition from "../components/PageTransition";
import AnimatedCard from "../components/AnimatedCard";





export default function ResumeAnalysis(){


const [file,setFile]=useState<File | null>(null);

const [loading,setLoading]=useState(false);

const [result,setResult]=useState<any>(null);






async function analyzeResume(){


if(!file){

toast.error(
"Please upload your resume"
);

return;

}



const formData=new FormData();


formData.append(
"resume",
file
);



try{


setLoading(true);



const response =
await api.post(

"/ats-score",

formData,

{

headers:{

"Content-Type":
"multipart/form-data"

}

}

);



setResult(
response.data.ats_score
);



toast.success(
"Resume analyzed successfully"
);



}

catch(error){


console.log(error);


toast.error(
"Unable to analyze resume"
);


}

finally{


setLoading(false);


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

Resume Analysis

</h1>


<p className="text-gray-500 mt-2">

Check your resume ATS compatibility.

</p>








{/* Upload Card */}



<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">


<div className="flex items-center gap-3">


<FileText

className="text-indigo-600"

/>


<h2 className="text-2xl font-bold">

Upload Resume

</h2>


</div>







<div className="border-2 border-dashed border-indigo-300 rounded-2xl mt-6 p-10 text-center">


<Upload

size={45}

className="mx-auto text-indigo-600"

/>




<input


type="file"


accept=".pdf"


onChange={(e)=>

setFile(

e.target.files?.[0] || null

)

}


className="mt-5"



/>





{

file &&


<p className="mt-4 text-green-600">


Selected:

{file.name}


</p>


}





<button


onClick={analyzeResume}


disabled={loading}


className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-xl"


>


{

loading

?

"Analyzing..."

:

"Analyze Resume"

}



</button>




</div>



</div>


</AnimatedCard>









{/* Result */}



{

result &&


<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">





<h2 className="text-3xl font-bold">

ATS Score

</h2>






<div className="flex items-center gap-4 mt-6">


<div className="w-32 h-32 rounded-full bg-indigo-600 flex items-center justify-center">


<span className="text-4xl text-white font-bold">


{result.score}


</span>


</div>





<div>


<p className="text-gray-500">

Out of 100

</p>


<p className="text-green-600 flex gap-2 mt-2">


<CheckCircle size={20}/>


ATS Compatible


</p>


</div>



</div>









{/* Skills */}




<h3 className="text-xl font-bold mt-8">

Skills Found

</h3>



<div className="flex flex-wrap gap-3 mt-4">


{

result.skills_found?.map(

(skill:string)=>(


<span

key={skill}

className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full"


>


{skill}


</span>


)

)


}


</div>









{/* Suggestions */}



<h3 className="text-xl font-bold mt-8 flex gap-2">


<Sparkles

className="text-yellow-500"

/>


Suggestions


</h3>




<div className="mt-4 space-y-3">


{

result.suggestions?.map(

(item:string)=>(


<div

key={item}

className="bg-gray-100 p-4 rounded-xl flex gap-3"


>


<AlertCircle

className="text-orange-500"

/>


{item}


</div>


)

)


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