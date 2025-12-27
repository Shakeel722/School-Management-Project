import {useForm } from "react-hook-form";
import axios from "axios";

function AddSchool() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        } = useForm();


        const onSubmit = async (data)=> {
            const formData  = new FormData();
            formData.append("name", data.name);
            formData.append("address", data.address);
            formData.append("city", data.city);
            formData.append("state", data.state);
            formData.append("contact", data.contact);
            formData.append("email_id", data.email_id);
            formData.append("image", data.image[0]);


            try {
                await axios.post("http://localhost:5000/api/schools", formData);
                alert("School Added Successfully!");
                reset();
            } catch(error) {
                alert("Error Adding School!");
                console.error(error);
            }

            

        }


           return ( 

        <div style = {{maxWidth:"500px" , margin:"auto"}} >
            <h2>Add School</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                   
                 
                   <input placeholder="School Name" type="text"  {...register("name", {required: true})} />

                   {errors.name && <p>Name is required</p>}

    
                    <input placeholder="Address" {...register("address", {required: true})} />

                   {errors.address && <p>Address is required</p>}


            
                    <input placeholder="City"   {...register("city", {required: true})} />

                   {errors.address && <p>City is required</p>}

              

                     <input placeholder="State"   {...register("state", {required: true})} />

                   {errors.address && <p>State is required</p>}

                   <input type="number" placeholder="Contact" {...register("contact",{required:true})} />
                   {errors.contact && <p>Contact is required</p>}

             
                   <input type="email" placeholder="Email" {...register("email_id",{required:true , pattern: /^\S+@\S+$/i, })} />

                   {errors.email_id && <p>Valid email is required</p>}
                      
             

                  <input type="file" {...register("image",{required:true})} />
                  {errors.image && <p>Image is required</p>}

                  <button type="submit">Add School</button>

                  </form>
            </div>


    )

    };

 

    export default AddSchool;