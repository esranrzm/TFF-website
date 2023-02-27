import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AdminProfilePage() {
    
    const { user } = useSelector((state) => state.auth)
    const [username] = useState(user.name)
    const navigate = useNavigate()

    const handleSubmitPlayers = (e) => {
        e.preventDefault()
        navigate('/players')
        //window.location.reload()
    }

    const handleSubmitCreatePlayer = (e) => {
        e.preventDefault()
        navigate('/new-player')
        //window.location.reload()
    }
    const handleSubmitProfile = (e) => {
        e.preventDefault()
        navigate('/profileSettings')
        //window.location.reload()
    }
    const handleSubmitSettings = (e) => {
        e.preventDefault()
        navigate('/users')
        //window.location.reload()
    }
    const handleSubmitReports = (e) => {
        e.preventDefault()
        navigate('/reportedUsers')
        //window.location.reload()
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Dear {username}, this is your profile
                </h1>
                
            </section>

            <div>
            <section className="heading">
                <h1>What do you need help with?</h1>
                <p>Please chose from an option below</p>
            </section>
            <form onSubmit={handleSubmitCreatePlayer}>
               <button className='btn btn-block' style={{maxWidth:"50%", marginLeft:"25%"}}>
                    Create player
               </button>
            </form>

            <form onSubmit={handleSubmitPlayers}>
                <button type='allPlayers' className='btn btn-block' style={{maxWidth:"50%", marginLeft:"25%"}}>
                    View all players
                </button>
            </form>
           
            <form onSubmit={handleSubmitProfile}>
               <button className='btn btn-block' style={{maxWidth:"50%", marginLeft:"25%"}}>
                    Profile
               </button>
            </form>
            <form onSubmit={handleSubmitSettings}>
               <button className='btn btn-block' style={{maxWidth:"50%", marginLeft:"25%"}}>
                    User Settings
               </button>
            </form>
            <form onSubmit={handleSubmitReports}>
               <button className='btn btn-block' style={{maxWidth:"50%", marginLeft:"25%"}}>
                    Reported User
               </button>
            </form>
        </div>
        </>
    )
}

export default AdminProfilePage