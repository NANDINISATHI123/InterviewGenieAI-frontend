import { useState } from "react";

import api from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import PageTransition from "../components/PageTransition";
import AnimatedCard from "../components/AnimatedCard";


import {
  Mic,
  Send,
  BrainCircuit,
  Loader2,
  Star,
  CheckCircle
} from "lucide-react";



export default function MockInterview(){


const [question]=useState(
"Tell me about yourself."
);

const [answer,setAnswer]=useState("");

const [feedback,setFeedback]=useState("");

const [loading,setLoading]=useState(false);

const [score]=useState("");




async function submitAnswer(){


if(!answer){

alert("Please enter your answer");

return;

}



setLoading(true);



try{


const email =
localStorage.getItem("email");



const response = await api.post(

"/evaluate-answer",

{

email,

question,

answer

}

);



setFeedback(
response.data.feedback
);



}
catch(error){

console.log(error);

alert(
"Unable to evaluate answer"
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


<div className="max-w-6xl mx-auto p-8">



<h1 className="text-4xl font-bold">

AI Mock Interview

</h1>


<p className="text-gray-500 mt-2">

Practice interviews with an AI interviewer.

</p>





{/* Interview Question */}



<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">


<div className="flex items-center gap-3">


<BrainCircuit

className="text-indigo-600"

/>


<h2 className="text-2xl font-bold">

Interview Question

</h2>


</div>




<div className="bg-indigo-50 rounded-2xl p-6 mt-6">


<p className="text-lg font-semibold">

{question}

</p>


</div>




<button

className="mt-5 flex gap-2 items-center bg-indigo-600 text-white px-6 py-3 rounded-xl"

>


<Mic/>

Start Speaking


</button>



</div>


</AnimatedCard>







{/* Answer Section */}



<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">


<h2 className="text-2xl font-bold">

Your Answer

</h2>




<textarea


value={answer}


onChange={(e)=>

setAnswer(e.target.value)

}


placeholder="Type your answer here..."


className="w-full h-48 border rounded-2xl p-5 mt-5 resize-none"



/>




<button


onClick={submitAnswer}


disabled={loading}


className="mt-6 bg-green-600 text-white px-8 py-3 rounded-xl flex gap-3 items-center"



>


{


loading ?

<>

<Loader2

className="animate-spin"

/>

Evaluating...

</>


:

<>

<Send/>

Submit Answer

</>


}



</button>



</div>


</AnimatedCard>









{/* Feedback */}




{

feedback &&


<AnimatedCard>


<div className="bg-white rounded-3xl shadow-xl p-8 mt-8">


<div className="flex gap-3 items-center">


<CheckCircle

className="text-green-600"

/>


<h2 className="text-2xl font-bold">

AI Feedback

</h2>


</div>





<div className="mt-6 whitespace-pre-wrap text-gray-700">


{feedback}


</div>





<div className="flex items-center gap-3 mt-8 bg-yellow-50 p-5 rounded-xl">


<Star

className="text-yellow-500"

/>


<div>


<p className="font-semibold">

Interview Score

</p>


<p className="text-3xl font-bold">

{score || "Evaluated"}

</p>


</div>


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