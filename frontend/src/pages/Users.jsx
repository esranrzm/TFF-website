import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getUsers} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import UserItem from '../components/UserItem'
import authService from '../features/auth/authService'



function Users() {
    const { users, isSuccess } = useSelector((state) => state.auth)
    const [userList, setUserList] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        return async () => {
            
            setUserList(await authService.getUsers())
            
        }
    }, [dispatch, isSuccess])

 

    return (
        <>
            <h1>USERS</h1>
            <div className="tickets">
                <div className="ticket-headings">
                    
                   
                    <div>Username</div>
                    <div>Email</div>
                    <div>Is Admin</div>
                    <div>Verification Status</div>
                   <div></div>
                    <div>Action</div>
                    
                </div>
                
                {userList.map((user) => (
                    <UserItem key={user._id} user={user}/>
                ))}
            </div>
        </>
    )
}

export default Users