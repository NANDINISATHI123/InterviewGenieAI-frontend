import { useEffect, useState } from "react";


export default function InterviewHistory(){

    const [history,setHistory] = useState<any[]>([]);


    useEffect(()=>{


        const email =
        localStorage.getItem("email");


        fetch(
            `https://interviewgenieai-backend-v67z.onrender.com/interview-history/${email}`
        )
        .then(res=>res.json())
        .then(data=>{

            setHistory(data);

        });


    },[]);



    return(

        <div
            style={{
                padding:"40px"
            }}
        >

            <h1>
                Interview History
            </h1>


            {
                history.map((item)=>(

                    <div
                        key={item.id}
                        style={{
                            background:"#f5f5f5",
                            padding:"20px",
                            margin:"20px 0"
                        }}
                    >

                        <h3>
                            Question:
                        </h3>

                        <p>
                            {item.question}
                        </p>


                        <h3>
                            Score:
                            {item.score}/10
                        </h3>


                        <h3>
                            Feedback:
                        </h3>


                        <pre>
                            {item.feedback}
                        </pre>


                    </div>

                ))
            }


        </div>

    );

}