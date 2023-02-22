
import './App.css';
/* import {PanelTasks} from './components/PanelTasks/PanelTasks'*/
import {Layaout} from './components/Layout/Layaout' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PanelProducts } from './components/panelProducts/PanelProducts';


function App() {
  return (
  <>
    
    <BrowserRouter>
      <Routes> 
        <Route path="/home" element={<PanelProducts/>} />
        {/*   <Route path="/panel-tasks/:token" element={<PanelTasks/>}/>  */}
        <Route path="/login" element={<Layaout />} />    
        {/* <Route path="/chat-bot" element={<PanelChat />} />     */}
     </Routes> 
   </BrowserRouter>   
  </>
  );
}

export default App;
