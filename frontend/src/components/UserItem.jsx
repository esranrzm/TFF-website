import {Form, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {toast} from 'react-toastify'
import { deleteUser, logout} from '../features/auth/authSlice'
import { useDispatch,useSelector } from 'react-redux'
import {update} from '../features/auth/authSlice'
// import { objectTraps } from 'immer/dist/internal'

function UserItem({user}) {

    
    const dispatch = useDispatch()
    // const {user} = useSelector( (state) => state.auth)
    //console.log("userItem"  + JSON.stringify(user))
    const [userID] = useState(user._id)
    // const [username] = useState(user.name)
    // const [email] = useState(user.email)
    // const [verif] = useState(user.verification)
    // const [isAdmin] = useState(user.isAdmin)
    
    const formData = {
        
        username: user.name,
        email: user.email,
        id : user._id,
        verification: !user.verification,
    }
    // const [, setFromData] = useState({
    //     user: user._id,
    //     username: user.name,
    //     email: user.email,
    //     isAdmin: user.isAdmin,
    //     verification: user.verification,
    // })
    
    const handleDelete = (e) => {
        
        e.preventDefault()
        toast.error('Account deleted')
        dispatch(deleteUser(userID))
        dispatch(logout())     
        
        window.location.reload()
    }
    const toggleTruthValue = () => {
        
        // setFromData (prevObject => (({
        //     verification: !prevObject.verification
        // })));
        console.log(formData)
        console.log("before dispatch: "+formData.verification)
        console.log("username: "+formData.username)
        toast.info('User verified')
        dispatch(update(formData))
        console.log("user updated:" + formData.verification.toString())
        //window.location.reload()
      }
    
    // const handleVerif = (e) => {
    //     //e.preventDefault()
    //     console.log("verif: " + e)
        
    //     setFromData( (prevState) => ({
    //         ...prevState, 
    //         verification: e.target.value,
    //     }))
    //     console.log("e: " + e.toString())
    //     // const userData = {
    //     //     name: username,
    //     //     email: email,
    //     //     isAdmin: isAdmin,
    //     //     verification: e
    //     // }
        
    //     console.log("formData:" + formData.verification.toString())
        

    //     toast.info('User verified')
    //     dispatch(update({name: username, email: email, isAdmin:isAdmin, verification: true }))
    //     console.log("user updated:" + verif.toString())
    //     //window.location.reload()
    // }
   
    return (
        <div className="tickets">
        <div className="ticket-headings">
            {/* <div className="left-panel box">
                {user._id}
            </div> */}
            <div className="left-panel box">
                {user.name}
            </div>
            <div className="middle-panel box">
                {user.email}
            </div>
            <div className="right-panel box">
                {user.isAdmin.toString()}
            </div>
            <div className="right-panel box">
                {user.verification.toString()}
            </div>
            <div></div>
            {/* <form onClick={() => handleVerif(!item)}  >
                <button className="btn btn-reverse btn-sm">Verify</button>
            </form> */}
            <form>
            <button className="btn btn-reverse btn-sm" type='verify' onClick={toggleTruthValue}>Verify</button>
            {/* <p>Truth Value: {formData.verification ? 'True' : 'False'}</p> */}
            </form>
            
            <form onClick={handleDelete}  >
                <button className="btn btn-reverse btn-sm" type='delete'>Delete</button>
            </form>
            
        </div>
    </div>
        
    )
}

export default UserItem