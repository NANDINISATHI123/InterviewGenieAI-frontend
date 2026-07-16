import { useState } from "react";


export default function ATSScore(){


const [file,setFile]=useState<File|null>(null);

const [result,setResult]=useState("");



const checkScore = async()=>{


    if(!file){

        alert("Upload resume");

        return;

    }



    const formData=new FormData();


    formData.append(
        "resume",
        file
    );



    const response = await fetch(

        "http://127.0.0.1:8000/ats-score",

        {

            method:"POST",

            body:formData

        }

    );



    const data=await response.json();



    setResult(
        data.ats_score
    );

};



return(

<div
style={{
padding:"40px"
}}
>


<h1>
📊 ATS Resume Score
</h1>



<input

type="file"

accept=".pdf"

onChange={(e)=>
setFile(
e.target.files?.[0] || null
)
}

/>



<br/>
<br/>



<button

onClick={checkScore}

>

Check ATS Score

</button>



{

result &&

<div>

<h2>
Result
</h2>


<pre>

{result}

</pre>


</div>

}



</div>

);


}