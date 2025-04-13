import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Dashboard} from './Pages/Dashboard';
import { Signup } from './Pages/Signup';
import { Signin } from './Pages/Signin';

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
  )}

export default App
