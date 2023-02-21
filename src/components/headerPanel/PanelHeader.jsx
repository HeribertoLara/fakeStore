import React from 'react'
import './headerPanel.css'

 function PanelHeader({
 
  setOpenModal
 }) {

   const openModalFunc= () =>{
    setOpenModal(true)
   }

  return (
    <section className="header">
        <h2 className="header--title">Tareas</h2>
        <div className="header--container">
        <input
            className="header--input"
            placeholder=" buscar tarea " 
        />
        <button 
            className="header--button"
            onClick={openModalFunc}
            >
                + Crear nueva tarea
            </button>
        </div>
    </section>
  )
}
export { PanelHeader }