
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './Component/Register';
import Home from './Component/Home';
import Login from './Component/Login';
import Store from './Component/Store/Store';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>  
         <Route path="/login" element={<Login />}/>

           <Route path="/register" element={<Register />}/>
      
            <Route path="/home" element={<Home />}/>
            <Route path="/store" element={<Store />}/>
      
      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
