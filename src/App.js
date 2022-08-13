import './App.css';
import { useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './register';
import Login from './Login';
import Home from './Home';
import UserList from './UserList';



function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/list' element={<UserList />} />
      </Routes>
    </BrowserRouter>
   );
}

export default App;
