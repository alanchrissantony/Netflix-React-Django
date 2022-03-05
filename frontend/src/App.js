import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './Pages/Index';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import ProfileCreate from './Pages/ProfileCreate';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Index/>}/>
          <Route path='/account/login' element={<Login/>}/>
          <Route path='/account/signup' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/createprofile' element={<ProfileCreate/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
