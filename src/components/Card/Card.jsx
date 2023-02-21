import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './card.css'

const Card=({
    token,
    data
    })=> {
    
    

    const [ selectedOption, setSelectedOption ]= useState("")
    const [status, setStatus] = useState([]);
    
    const getStatus = async () => {
        await axios
          .get("https://tasks-crud.academlo.com/api/status", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            console.log("status", res.data);
            setStatus(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const handleOptionChange =async(event, taskID)=> {

        setSelectedOption(event.target.value);
        await axios
          .post(`https://tasks-crud.academlo.com/api/tasks/${taskID}/status/${selectedOption}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(response => response.json())
          .then(data => {
            console.log('nuevo status',data)
          })
          .catch(error => {
            console.error(error)
          });
      } 

      useEffect(()=>{
        getStatus()
      },[])
  return (
        <div className='card' key={data.id}>
            <h3 className='card--title'>{data.name}</h3>
            <hr className='card--line' />
            <h5 className='card--subtitle'>DESCRIPCION</h5>
            <p className='card--description'>{data.description}</p>

           <select 
              value={data.status} 
              onChange={(e)=>handleOptionChange( e, data.id)}
              >
              {
                status.map((stat) => (
                  <option key={stat.id} value={stat.id} >
                  {stat.name}
                  </option>
                  ))}
              </select> 
                {/* <div className="p-card"></div> */}
          
        </div>
  )
}

export {Card}