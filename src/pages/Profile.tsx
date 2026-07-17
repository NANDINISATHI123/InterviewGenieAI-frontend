import { useEffect, useState } from "react";


export default function Profile(){

    const [profile,setProfile] = useState<any>(null);


    useEffect(()=>{


        const email =
        localStorage.getItem("email");


        fetch(
            `https://interviewgenieai-backend-v67z.onrender.com/profile/${email}`
        )
        .then(res=>res.json())
        .then(data=>{

            setProfile(data);

        });


    },[]);



    if(!profile){

        return <h2>Loading...</h2>;

    }



    return(

        <div
            style={{
                padding:"40px"
            }}
        >

            <h1>
                User Profile
            </h1>


            <h3>
                Name:
                {profile.name}
            </h3>


            <h3>
                Email:
                {profile.email}
            </h3>



            <hr/>


            <h2>
                Statistics
            </h2>


            <p>
                📄 Resumes Uploaded:
                {profile.resume_count}
            </p>


            <p>
                🎤 Interview Attempts:
                {profile.interview_attempts}
            </p>


            <p>
                ⭐ Average Score:
                {profile.average_score}
            </p>


        </div>

    );

}