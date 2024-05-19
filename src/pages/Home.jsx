import {useNavigate} from "react-router-dom"
import { useState } from 'react'
import axios from 'axios';



function Home() {
  const navigate= useNavigate();
  const [data, setData] = useState([{ "Attribute": "", "Type": "" }])
  const handleClick = () => {
    setData([...data,{Attribute:"",Type:""}])
  }

  const goTo=()=>{
    navigate("/info")
  }

  const handleChange=(e,i)=>{
    const {name,value}=e.target;
    const onChangeVal= [...data];
    onChangeVal[i][name]=value;
    setData(onChangeVal);
  }
  const handleDelete=(i)=>{
    const deleteVal=[...data];
    deleteVal.splice(i,1);
    setData(deleteVal);
  }

  const sendData=async (e)=>{
    e.preventDefault();
    console.log("Data Sent");
    
    try {
      await axios.post("https://internproject-4m4h.onrender.com/",{
        data
      });
    } catch (error) {
      console.log("Error: ",error);
    }
    navigate("/info");
  }

  return (
    <>
      <div>Create Entity</div>
      <button onClick={handleClick}>Add</button>
      <form action='POST'>
        {
          data.map((val, i) => {
            return (
              <div key={i}>
                <input type='text' name='Attribute' value={val.Attribute} onChange={(e)=>handleChange(e,i)}></input>
                <input type='text' name='Type' value={val.Type} onChange={(e)=>handleChange(e,i)}></input>
                {
                  i==data.length-1?
                  <button onClick={()=>handleDelete(i)}> Delete</button> : ""
                }
              </div>
            )
          })
        }
        <input type="submit" onClick={sendData} value="Submit"/>
      </form>
      <p>{JSON.stringify(data)}</p>

      <button onClick={goTo}>Goto</button>
    </>
  )
}

export default Home
