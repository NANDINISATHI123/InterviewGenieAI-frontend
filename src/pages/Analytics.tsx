import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";


import { useEffect, useState } from "react";



export default function Analytics(){


const [data,setData]=useState([

    {
        name:"Resumes",
        count:0
    },

    {
        name:"Interviews",
        count:0
    }

]);



const [average,setAverage]=useState(0);



useEffect(()=>{


    const email =
    localStorage.getItem("email");



    fetch(
        `http://127.0.0.1:8000/analytics/${email}`
    )

    .then(res=>res.json())

    .then(result=>{


        setData([


            {
                name:"Resumes",
                count:result.total_resumes
            },


            {
                name:"Interviews",
                count:result.total_interviews
            }


        ]);



        setAverage(
            result.average_score
        );


    });



},[]);




return(


<div className="p-10">


<h1 className="text-4xl font-bold">

📊 Analytics Dashboard

</h1>




<div className="grid md:grid-cols-3 gap-6 mt-10">



<div className="bg-white shadow rounded-xl p-6">


<h2 className="text-gray-500">

Total Resumes

</h2>


<p className="text-4xl font-bold">

{data[0].count}

</p>


</div>




<div className="bg-white shadow rounded-xl p-6">


<h2 className="text-gray-500">

Total Interviews

</h2>


<p className="text-4xl font-bold">

{data[1].count}

</p>


</div>




<div className="bg-white shadow rounded-xl p-6">


<h2 className="text-gray-500">

Average Score

</h2>


<p className="text-4xl font-bold">

{average}/10

</p>


</div>



</div>





<div className="bg-white shadow rounded-xl p-6 mt-10">


<h2 className="text-2xl font-semibold mb-5">

Performance Overview

</h2>




<ResponsiveContainer
width="100%"
height={300}
>


<BarChart data={data}>


<XAxis dataKey="name"/>


<YAxis/>


<Tooltip/>


<Bar
dataKey="count"
/>


</BarChart>


</ResponsiveContainer>


</div>



</div>


);


}
