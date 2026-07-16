import { useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition
} from "react-speech-recognition";


export default function VoiceInterview(){


    const [question,setQuestion] = useState(
        "Explain Object Oriented Programming in Python"
    );


    const [feedback,setFeedback] = useState("");



    const {
        transcript,
        listening,
        resetTranscript
    } = useSpeechRecognition();



    const startListening = () => {

        resetTranscript();

        SpeechRecognition.startListening({

            continuous:true,

            language:"en-US"

        });

    };



    const stopListening = () => {

        SpeechRecognition.stopListening();

    };





    const submitAnswer = async()=>{


        const response = await fetch(

            "http://127.0.0.1:8000/evaluate-answer",

            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json"

                },


                body:JSON.stringify({

                    email:
                    localStorage.getItem("email"),

                    question:question,

                    answer:transcript

                })

            }

        );



        const data = await response.json();


        setFeedback(
            data.feedback
        );

    };





    return(


        <div
        style={{
            padding:"40px"
        }}
        >


            <h1>
                🎙️ AI Voice Interview
            </h1>



            <h2>
                Question
            </h2>


            <p>

                {question}

            </p>




            <button
            onClick={startListening}
            >

                🎤 Start Speaking

            </button>



            <button
            onClick={stopListening}
            >

                ⛔ Stop

            </button>




            <h2>
                Your Answer
            </h2>



            <p>

                {transcript}

            </p>




            <button
            onClick={submitAnswer}
            >

                Submit Answer

            </button>




            {

                feedback &&

                <div>

                    <h2>
                        AI Feedback
                    </h2>


                    <pre>

                        {feedback}

                    </pre>

                </div>

            }



        </div>


    );

}