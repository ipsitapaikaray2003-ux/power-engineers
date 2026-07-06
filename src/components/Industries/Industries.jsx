import "./Industries.css";
import { motion } from "framer-motion";

import {
FaIndustry,
FaBolt,
FaBuilding,
FaHospital,
FaSchool,
FaCity
} from "react-icons/fa";

const industries = [

{
icon:<FaIndustry/>,
title:"Industrial Plants",
text:"Complete electrical solutions for manufacturing industries."
},

{
icon:<FaBolt/>,
title:"Power Distribution",
text:"Reliable HT & LT panel solutions for power sectors."
},

{
icon:<FaBuilding/>,
title:"Commercial Buildings",
text:"Modern electrical infrastructure for commercial projects."
},

{
icon:<FaHospital/>,
title:"Hospitals",
text:"Safe and uninterrupted electrical systems for healthcare."
},

{
icon:<FaSchool/>,
title:"Educational Institutions",
text:"Reliable electrical engineering for schools & colleges."
},

{
icon:<FaCity/>,
title:"Infrastructure",
text:"Electrical solutions for smart infrastructure projects."
}

];

function Industries(){

return(

<section className="industries">

<div className="section-title">

<span>INDUSTRIES WE SERVE</span>

<h2>

Delivering Solutions Across Every Industry

</h2>

<p>

We provide advanced electrical engineering
solutions for industries, commercial projects,
government organizations and infrastructure.

</p>

</div>

<div className="industry-grid">

{

industries.map((item,index)=>(

<motion.div

className="industry-card"

key={index}

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

viewport={{once:false}}

transition={{duration:.6,delay:index*.15}}

>

<div className="industry-icon">

{item.icon}

</div>

<h3>

{item.title}

</h3>

<p>

{item.text}

</p>

</motion.div>

))

}

</div>

</section>

)

}

export default Industries;