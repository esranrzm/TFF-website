import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ReportedUserItem from '../components/ReportedUserItem'
import reportsService from '../features/reports/reportsService'


function ReportedUsers() {
    const {isSuccess } = useSelector((state) => state.auth)
    const [reportedUserList, setUserList] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        return async () => {
            
            setUserList(await reportsService.getrUsers())
            
        }
    }, [dispatch, isSuccess])

 

    return (
        <>
            <h1>REPORTED USERS</h1>
            <div className="tickets">
                <div className="ticket-headings">
                    
                   
                    <div>Username</div>
                    <div>id</div>
                    <div></div>
                    <div>reported at</div>
                   <div></div>
                   
                    <div>Action</div>
                    
                </div>
                
                {reportedUserList.map((ruser) => (
                    <ReportedUserItem key={ruser._id} ruser={ruser}/>
                ))}
            </div>
        </>
    )
}

export default ReportedUsers