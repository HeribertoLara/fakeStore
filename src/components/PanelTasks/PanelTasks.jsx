import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { Card } from "../Card/Card";
import { PanelHeader } from "../headerPanel/PanelHeader";
import './panelTasks.css'

const PanelTasks = () => {
  const { token } = useParams();

  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getTask = async () => {
    await axios
      .get("https://tasks-crud.academlo.com/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

 
  useEffect(() => {
    getTask(); 
  }, []);

  return (
    <>
      <PanelHeader openModal= {openModal} setOpenModal={setOpenModal} />
      {openModal?
        
        <Modal openModal={setOpenModal} setOpenModal={setOpenModal} token={token}/>
        : ""
        } 
      <div className="container-cards">
        {
          tasks.map(task=>(
            <Card
              key={task.id}
              data={task}
              token={token}
            />
          ))
        }
      
        
        
      </div>
    </>
  );
};

export { PanelTasks };
