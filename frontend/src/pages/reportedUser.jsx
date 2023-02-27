import {useEffect} from 'react'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import { useParams} from 'react-router-dom'
import {getrUser} from '../features/reports/reportsSlice'
import Spinner from '../components/Spinner'


function ReportedUser() {
    const {user} = useSelector((state) => state.auth)

    
    const dispatch = useDispatch()
    const {userID} = useParams()
   
    useEffect(() => {

        dispatch(getrUser(userID)).unwrap().catch(toast.error)

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

export default ReportedUser