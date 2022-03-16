import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './Pages/Index';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import ProfileCreate from './Pages/ProfileCreate';
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import Movie from './Pages/Movies';
import TVShows from './Pages/TVShows';
import Latest from './Pages/Latest';
import MyList from './Pages/MyList';
import ProfileEdit from './Pages/ProfileEdit';
import ManageProfile from './Pages/ManageProfile';
import YourAccount from './Pages/YourAccount';
import ChangeEmail from './Pages/ChangeEmail';
import ChangePassword from './Pages/ChangePassword';
import { render } from 'react-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Index/>}/>
          <Route path='/account/login' element={<Login/>}/>
          <Route path='/account/signup' element={<SignUp/>}/>
          <Route path='/account/changemail' element={<ChangeEmail/>}/>
          <Route path='/account/changepassword' element={<ChangePassword/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/createprofile' element={<ProfileCreate/>}/>
          <Route path='/editprofile' element={<ProfileEdit/>}/>
          <Route path='/manageprofiles' element={<ManageProfile/>}/>
          <Route path='/profile/account' element={<YourAccount/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/movie' element={<MovieDetails/>}/>
          <Route path='/tvshows' element={<TVShows/>}/>
          <Route path='/movies' element={<Movie/>}/>
          <Route path='/latest' element={<Latest/>}/>
          <Route path='/mylist' element={<MyList/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;


