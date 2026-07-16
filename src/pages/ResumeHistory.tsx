import { useEffect, useState } from "react";

export default function ResumeHistory() {

    const [resumes, setResumes] = useState<any[]>([]);

    useEffect(() => {

        fetch("http://127.0.0.1:8000/resume-history")
            .then(res => res.json())
            .then(data => setResumes(data));

    }, []);

    return (

        <div style={{ padding: 30 }}>

            <h1>Resume History</h1>

            {resumes.map((resume) => (

                <div
                    key={resume.id}
                    style={{
                        border: "1px solid gray",
                        padding: 20,
                        marginBottom: 20,
                        borderRadius: 10
                    }}
                >

                    <h3>{resume.filename}</h3>

                    <pre style={{ whiteSpace: "pre-wrap" }}>
                        {resume.analysis}
                    </pre>

                </div>

            ))}

        </div>

    );

}