import axios from 'axios'
import  { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddEntry() {

    const navigate=useNavigate();
    const [head,sethead]=useState([]);
    
    useEffect(()=>{axios.get("https://internproject-4m4h.onrender.com/get-head/")
    .then((res)=>{sethead(res.data);})
    .catch((err)=>{throw err})},[])

    
    let dict={};
    const handleSubmit=(event)=>{
        event.preventDefault();
         axios.post("https://internproject-4m4h.onrender.com/create",dict)
        .then(res=>{
            console.log(res);
            navigate("/info");
        })
        .catch(err=>{
            console.log(err);
        })
    }

  return (
    <>
    <h4 style={{color:"red"}}> enter data in proper formate i.e. if need to enter string explicitly give quation("")  e.g If I have to enter Aman write "Aman" </h4>

    <div style={{display:"flex", justifyContent:"center",alignItems:"center" ,background:"grey"}}>

        <div style={{width:"50%",background:"white",border:"black"}}>

        <form onSubmit={handleSubmit}>
            {
                head.map((val,i)=>{
                    return(
                        i==0?"":
                            <div key={i}>
                                <label htmlFor=''>{val["Field"]}</label>
                                <input type='text' placeholder={"Enter "+val["Field"]} 
                                onChange={e=>dict[val["Field"]]=e.target.value}
                                ></input>
                            </div>
                    )
                })
            }
            <button type='submit' > Submit </button>
        </form>

        </div>
    </div>
    </>
  )
}

export default AddEntry