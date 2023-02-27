import React from 'react';
import {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
//import {reset} from '../features/auth/authSlice'
import {loginAdmin} from '../features/auth/authSlice'
import {useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner';


function LoginAdmin() {

    const [formData, setFromData] = useState({
        email: '',
        password: '',  
    })

    const {email, password} = formData

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {user, isLoading, isError, isSuccess, message} 
    = useSelector(state => state.auth)


    const onChange = (e) => {
        setFromData( (prevSate) => ({
            ...prevSate, 
            [e.target.name]: e.target.value,
        }))
    }

    useEffect(() => {

        if(isError) {
            toast.error(message)
        }

        //redirect when logged in

        if(isSuccess || user) {
            navigate('/adminprofilepage')
        }

       
    }, [isError, isSuccess, user, message, navigate, dispatch])


    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(loginAdmin(userData))

    }

    if(isLoading){
        return <Spinner />
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt/> Login as an Admin
                </h1>
                <p>Please enter your credentials</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" className='form-control'
                        id='email' value={email} name='email' onChange={onChange} 
                        placeholder='Enter your email' required/>
                    </div>
                    <div className="form-group">
                        <input type="password" className='form-control'
                        id='pssword' value={password} name='password' onChange={onChange} 
                        placeholder='Enter your password' requred/>
                    </div>
                    <div className="form-group">
                        <button type='adminLogin' className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}
export default LoginAdmin;