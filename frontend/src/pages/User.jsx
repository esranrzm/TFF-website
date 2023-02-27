import {useEffect} from 'react'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import { useParams} from 'react-router-dom'
import {getUser} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function User() {
    const {user} = useSelector((state) => state.auth)

    
    const dispatch = useDispatch()
    const {userID} = useParams()
   
    useEffect(() => {

        dispatch(getUser(userID)).unwrap().catch(toast.error)

    }, [dispatch, userID])

    if(!user) {
        return <Spinner />
    }

    return <div className='ticket-page'>
        <header className="ticket-header">
            <h2>
                User ID: {userID}
            </h2>
           
            <hr /><div className="ticket-desc">
                <h3>username</h3>
                <p>{user.name}</p>
            </div>
        </header>
    </div>
}

export default User