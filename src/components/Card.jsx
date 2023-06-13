export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div style={{backgroundColor:"red", margin:10, height:"auto", width:"180px"}}>
         <img style={{height:"100px"}} src={image} alt='Error' />
         <h1 style={{fontSize:"16px"}}>{name}</h1>
         <p style={{fontSize:"12px"}}>{status}</p>
         <p style={{fontSize:"12px"}}>{gender}</p>
         <p style={{fontSize:"12px"}}>{origin}</p>
         <p style={{fontSize:"12px"}}>{species}</p>
         <button onClick={()=>onClose(id)} >X</button>
      </div>
   );
}
