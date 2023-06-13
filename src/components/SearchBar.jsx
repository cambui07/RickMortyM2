import { useState } from "react";
import "../styles/SearchBar.css"

export default function SearchBar({onSearch}) {
   
   const [id,setId] = useState("")

   const handleChange = (event)=>{
      console.log(event);
      setId(event.target.value)
   }

   function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
   }

   return (
      <div>
         <input value={id} onChange={(e)=>handleChange(e)} type='search' placeholder="Buscar..." className="InputSearchbar"/>
         <button onClick={()=>onSearch(id)} className="buttonSearchbar">Agregar</button>
         <button onClick={()=>onSearch(aleatorio(1,826))} className="buttonSearchbar">Aleatorio</button>

      </div>
   );
}
