import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Charts from './components/Charts';
import UpdateForm from './components/UpdateForm';

const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/charts' element={<Charts/>}/>
      <Route path='/update/:id' element={<UpdateForm/>}/>
    </Routes>
  </BrowserRouter>
  </>
  )

}


export default App;
