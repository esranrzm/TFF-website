import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import {update} from '../features/auth/authSlice'
import { deleteUser,logout } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import {useNavigate} from 'react-router-dom'



function ProfileSettings() {
 
    const { user, isLoading} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    
    const [firstName, setName] = useState(user.name);
    const [email, setmail] = useState(user.email);
    const [user_id] = useState(user._id)
    const [username] = useState(user.name)
    const [mail] = useState(user.email)
    const [verification] = useState(user.verification)
    
    const userData = {
        username: firstName,
        email: email,
        id: user_id,
        verification: verification
    }

    
    const handleEdit = (e) => {
        e.preventDefault()
        toast.info('Profile edited')
        dispatch(update(userData))
    }



    const handleDelete = (e) => {
        let userID=userData.id
        e.preventDefault()
        toast.error('Account deleted')
        dispatch(deleteUser(userID))
        dispatch(logout())     
        navigate('/') 
        window.location.reload()
        
    }

    if(isLoading){
        return <Spinner />
    }
    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Profile
                </h1>
                <p>Here is your Profile</p>
            </section>

            <section className="form">
                <form onSubmit={handleEdit}>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control" 
                        id='name'
                        name='name'
                        value={firstName}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={username}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email"
                        className="form-control" 
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setmail(e.target.value)}
                        placeholder={mail}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Edit</button>
                    </div>
                </form>
                <form onSubmit={handleDelete}  >
                    <button className="btn btn-block">Delete my account</button>
                </form>
            </section>
        </>
    )
}

export default ProfileSettings