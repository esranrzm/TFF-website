import {useState} from 'react'
import {toast} from 'react-toastify'
import { deleterUser} from '../features/reports/reportsSlice'
import { deleteUser} from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'

function ReportedUserItem({ruser}) {

    
    const dispatch = useDispatch()

    const [userID] = useState(ruser._id)

    const handlereportDelete = (e) => {
        
        e.preventDefault()
        toast.error('Account deleted')
        dispatch(deleterUser(userID))

        window.location.reload()
    }
    const handleDelete = (e) => {
        
        e.preventDefault()
        toast.error('Account deleted')
        dispatch(deleterUser(userID))
        dispatch(deleteUser(ruser.user))

        window.location.reload()
    }
    
    
    return (
        <div className="tickets">
        <div className="ticket-headings">

            <div className="left-panel box">
                {ruser.name}
            </div>
            <div className="middle-panel box">
                {ruser._id}
            </div>
            <div></div>
            <div className="right-panel box">
                {Date(ruser.createdat).toLocaleString('en-US')}
            </div>

            
            <div></div>
            <form onClick={handlereportDelete}  >
                <button className="btn btn-reverse btn-sm">Delete report</button>
            </form>
            <form onClick={handleDelete}  >
                <button className="btn btn-reverse btn-sm">Delete User</button>
            </form>
            
        </div>
    </div>
        
    )
}

export default ReportedUserItem