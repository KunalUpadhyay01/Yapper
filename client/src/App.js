import './App.css';
import Home from './Pages/Home';
import { Route, Routes} from 'react-router-dom'
import Register from './Pages/Register';
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
