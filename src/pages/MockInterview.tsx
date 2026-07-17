import { useState } from "react";

export default function MockInterview() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);


    const evaluateAnswer = async () => {

        if (!question || !answer) {

            alert("Enter question and answer");

            return;
        }


        setLoading(true);


        try {

            const response = await fetch(
                "https://interviewgenieai-backend-v67z.onrender.com/evaluate-answer",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({

                        email:
                        localStorage.getItem("email"),

                        question: question,

                        answer: answer

                    })

                }
            );


            const data = await response.json();


            setFeedback(
                data.feedback
            );


        } catch(error) {

            console.error(error);

            alert(
                "Failed to evaluate answer"
            );

        }


        setLoading(false);

    };



    return (

        <div
            style={{
                padding:"40px"
            }}
        >

            <h1>
                🎤 AI Mock Interview
            </h1>


            <label>
                Interview Question
            </label>


            <textarea

                rows={3}

                style={{
                    width:"100%",
                    marginTop:"10px"
                }}

                placeholder="Enter interview question"

                value={question}

                onChange={(e)=>
                    setQuestion(e.target.value)
                }

            />



            <br/>
            <br/>



            <label>
                Your Answer
            </label>


            <textarea

                rows={8}

                style={{
                    width:"100%",
                    marginTop:"10px"
                }}

                placeholder="Write your answer"

                value={answer}

                onChange={(e)=>
                    setAnswer(e.target.value)
                }

            />



            <br/>
            <br/>



            <button
                onClick={evaluateAnswer}
            >

                Evaluate Answer

            </button>



            {
                loading &&

                <h3>
                    AI is evaluating...
                </h3>

            }



            {
                feedback &&

                <div>

                    <h2>
                        AI Feedback
                    </h2>


                    <pre
                        style={{
                            whiteSpace:"pre-wrap",
                            background:"#f4f4f4",
                            padding:"20px"
                        }}
                    >

                        {feedback}

                    </pre>

                </div>

            }


        </div>

    );

}