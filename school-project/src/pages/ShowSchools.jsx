import { useEffect, useState } from "react";
import axios from "axios";

function ShowSchools() {

    const[schools, setSchools] = useState([]);

    useEffect(()=> {

   axios.get("http://localhost:5000/api/schools")
   .then((res)=> { 
    console.log(res.data);
    setSchools(res.data); 
})
.catch((err)=> console.error(err));

    }, []);


    return (
      
        <div style= { {padding:"20px"}}>
            
            <h2>Schools List</h2>
         

            <div  style= {{display:"grid" , gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap:"20px"}} >
                {schools.map((school, index) => {
                      
                      return ( 
                    <div key={index} style={{border:"1px solid #ccc" , padding:"10px" , borderRadius:"8px" , minHeight:"300px" , background:"#fff"} }>

                        <img src={`http://localhost:5000/schoolImages/${school.image}`} alt="school.name" 
                        style={{width:"100%" , height:"150px", objectFit:"cover" , display:"block"}} />

                        <h3>{school.name}</h3>
                        <p>{school.address}</p>
                         <p>{school.city}</p>

                    </div>
                      );

                })}
            </div>

        </div>

    );
}

export default ShowSchools;
