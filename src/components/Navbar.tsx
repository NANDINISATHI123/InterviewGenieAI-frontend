import { useNavigate } from "react-router-dom";


export default function Navbar(){

    const navigate = useNavigate();


    const email = localStorage.getItem("email");


    const logout = ()=>{

        localStorage.removeItem("token");

        localStorage.removeItem("email");

        navigate("/login");

    };


    return (

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">


            <div
            className="cursor-pointer"
            onClick={()=>navigate("/dashboard")}
            >

                <h1 className="text-2xl font-bold text-blue-600">

                    InterviewGenieAI 🚀

                </h1>

            </div>



            <div className="flex items-center gap-6">


                <button

                onClick={()=>navigate("/dashboard")}

                className="text-gray-700 hover:text-blue-600"

                >

                    Dashboard

                </button>



                <button

                onClick={()=>navigate("/profile")}

                className="text-gray-700 hover:text-blue-600"

                >

                    Profile

                </button>




                <span className="text-sm text-gray-500">

                    {email}

                </span>




                <button

                onClick={logout}

                className="bg-red-500 text-white px-4 py-2 rounded-lg"

                >

                    Logout

                </button>


            </div>


        </nav>

    );

}