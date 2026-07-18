import { motion } from "framer-motion";


export default function AnimatedCard({
children
}:any){

return(

<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.5
}}

whileHover={{
scale:1.03
}}

>

{children}

</motion.div>

)

}