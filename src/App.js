
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './Component/Register';
import Home from './Component/Home';
import Login from './Component/Login';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>  
         <Route path="/login" element={<Login />}/>

           <Route path="/register" element={<Register />}/>
      
            <Route path="/home" element={<Home />}/>
      
      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
