import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
/* import { withRouter } from "react-router-dom";
 */
const Login = (props) => {
 
  const navigate = useNavigate() 
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const sendForm = async (email, password) => {
    try {
      const res = await axios.post(
        "https://tasks-crud.academlo.com/api/auth/login",
        {
          email,
          password,
        },
        {
          Accept:"application/json"
        }
      );
      return res;
    } catch (error) {
      alert(error);
    }
  };

  const processData = async (e) => {
    e.preventDefault();
    const res = await sendForm(email, pass);
    console.log(res)
   

    if (!email.trim() || !pass.trim()) {
      setError("Datos vacíos email!");
      return;
    }
    if (!pass.trim()) {
      setError("Datos vacíos pass!");
      return;
    }
    if (res.status === 200) {
      alert("usuario registrado");
      setEmail("");
      setPass("");
      setError(null);
      //
      navigate(`/chat-bot/${res.data}`) 
    }
   
  };
  

  return (
    <>
      <h2 className="form--title">Inicio de sesion</h2>
      <form className="form--body" onSubmit={processData}>
        
          <div>
            {error ? <div className="form-alert form-alert-danger">{error}</div> : null}

            <label>
              Correo Electronico
              <br />
              <input
                className="form--input"
                placeholder="Escribe tu correo electronico"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Contraseña
              <br />
              <input
              className="form--input"
              placeholder="Escribe tu contraseña"
              type="password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                />
            </label>
          </div>
          
        
          <br />
          <button className="form--button" type="submit">
            Aceptar
          </button>
        
        <br />
      </form>
    </>
  );
};

export { Login };
