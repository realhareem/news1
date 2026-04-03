import { useState } from "react"
import Nav from "./Nav"

export default function Header({ getKeywords }) {

   const [active, setActive] = useState(false);
   const [keywords, setKeywords] = useState("");

   const handleChange = (event) => {
     const value = event.target.value.trim();
     setActive(value !== '');
     setKeywords(value);
     getKeywords(event);
   };

    return (
        <>
        
        <header style={{background: `${active ? "black":"blue"}`}}>
            <div className="logo"
            onClick={()=>console.log("logo clicked")}
            onPointerEnter={(e)=>console.log("Pointer Entered")} 
            >AWESOME NEWS</div>


            <input type="text" value={keywords} onChange={handleChange}
           />
           {/* <p>The Keywords are : {keywords}</p> */}

           <Nav />


        </header>

        </>
    )
}