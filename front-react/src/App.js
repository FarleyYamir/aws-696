import './App.css';
import Navegation from './componentes/navegation';
import Titulo from './componentes/titulo';
import Home from './componentes/Home';
import Register from './componentes/register';
import Consult from './componentes/consult';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './componentes/contact';


function App() {
  return (
    <div className="App">
      <Titulo />
      <Navegation />
          
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/register_page" element={<Register/>} />
              <Route path="/consult_page" element={<Consult/>} />
              <Route path="/contact_page" element={<Contact/>} />
             </Routes>
          </BrowserRouter>
       </div>
  );
}

export default App;