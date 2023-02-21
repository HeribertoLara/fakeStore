
import './App.css';
/* import {PanelTasks} from './components/PanelTasks/PanelTasks'
import {Layaout} from './components/Layout/Layaout' */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PanelProducts } from './components/panelProducts/PanelProducts';

function App() {
  return (
  <>
    <PanelProducts/>
    {/* <BrowserRouter>
      <Routes> 
        <Route path="/panel-tasks/:token" element={<PanelTasks/>}/> 
        <Route path="/" element={<Layaout />} />    
        <Route path="/chat-bot" element={<PanelChat />} />    
     </Routes> 
   </BrowserRouter>   */}
  </>
  );
}

export default App;
