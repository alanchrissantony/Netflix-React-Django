import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './Pages/Index';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import ProfileCreate from './Pages/ProfileCreate';
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import ModelPage from './Pages/ModelPage';
import ProfileEdit from './Pages/ProfileEdit';
import ManageProfile from './Pages/ManageProfile';

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
          <Route path='/editprofile' element={<ProfileEdit/>}/>
          <Route path='/manageprofiles' element={<ManageProfile/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/movie' element={<MovieDetails/>}/>
          <Route path='/tvshows' element={<ModelPage headTitle='Award-Winning TV Shows' titleOne='Trending Now' titleTwo='Critically Acclaimed TV Dramas' titleThree='Top Picks for bm25'/>}/>
          <Route path='/movies' element={<ModelPage headTitle='Movies' titleOne='Trending Now' titleTwo='New Releases' titleThree='Popular Movies'/>}/>
          <Route path='/latest' element={<ModelPage headTitle='Latest' titleOne='Trending Now' titleTwo='New Releases' titleThree='Popular Movies'/>}/>
          <Route path='/mylist' element={<ModelPage headTitle='My List' titleOne='Recently Added' titleTwo='Continue Watching' titleThree='Popular on Netflix'/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
