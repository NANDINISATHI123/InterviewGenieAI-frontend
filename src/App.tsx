import AppRoutes from "./routes/AppRoutes";

import { Toaster } from "react-hot-toast";



function App() {


return (

<>


<AppRoutes />


<Toaster

position="top-right"

toastOptions={{

duration:3000,

style:{

borderRadius:"12px",

background:"#1f2937",

color:"#fff"

}

}}

/>


</>


)

}



export default App;