
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NewTeam from './pages/NewTeam'
import PrivateRoute from './components/PrivateRoute'
import Teams from './pages/Teams'
import Team from './pages/Team'
import ProfileSettings from './pages/ProfileSettings'
import LoginAdmin from './pages/LoginAdmin'
import AdminProfilePage from './pages/AdminMainPage'
import NewPlayer from './pages/NewPlayer'
import Players from './pages/Players'
import Player from './pages/Player'
import EditPlayer from './pages/EditPlayer'
import ViewAllPlayers from './pages/ViewAllPlayers'
import DisplayTeam from './pages/DisplayUserTeams'
import User from './pages/User'
import Users from './pages/Users'
import PlayerProfilePage from './pages/PlayerProfilePage'
import ReportedUsers from './pages/reportedUsers'
import ReportedUser from './pages/reportedUser'
import TopFiveTeams from './pages/top5teams'
import VisitedProfile from './pages/VisitedProfile'


function App() {
  return(
    <>
    <Router>
      <div className='container'>
        <Header />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/loginAdmin' element={<LoginAdmin/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/adminprofilepage' element={<AdminProfilePage/>} />
            <Route path='/profilesettings' element={<ProfileSettings/>} />
            <Route path='/players' element={<Players />}/>
            <Route path='/player/:playerId' element={<Player />}/>
            <Route path='/editPlayer' element={<EditPlayer/>} />

            <Route path='/viewAllPlayers' element={<ViewAllPlayers/>} />
            <Route path='/TopFiveTeams' element={<TopFiveTeams/>} />
            <Route path='/displayTeam' element={<DisplayTeam/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/user/:userId' element={<User/>} />
            <Route path='/reportedUsers' element={<ReportedUsers/>} />
            <Route path='/reportedUser/:userId' element={<ReportedUser/>} />

            <Route path='/visitedProfile' element={<VisitedProfile/>} />
           
            <Route path='/new-team' element={<NewTeam />}/>

            <Route path='/new-player' element={<NewPlayer />}/>

            <Route path='/player-profile/:personel' element={<PlayerProfilePage />}/>
            

            <Route path='/teams' element={<PrivateRoute />}>
            <Route path='/teams' element={<Teams />}/>
            </Route>
            <Route path='/team/:teamId' element={<PrivateRoute />}>
            <Route path='/team/:teamId' element={<Team />}/>
            </Route>
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App;
