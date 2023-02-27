import React from 'react';
import {useState, useEffect} from 'react'
import{useNavigate} from 'react-router-dom'
// import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
// import {register} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Edit() {
    
    const [formData, setFromData] = useState({
        name: '',
    })

    const {name} = formData

    // const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
state => state.auth)

    // useEffect(() => {
    //     if(isError) {
    //         toast.error(message)
    //     }

    //     //redirect when logged in

    //     if(isSuccess || user) {
    //         navigate('/')
    //     }

    // }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e) => {
        setFromData( (prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value,
        }))
    }

    if(isLoading){
        return <Spinner />
    }
    
    return (
        <section className="form">
                <form>
                    <div className="form-group">
                        <input type="text" className='form-control'
                        id='name' value={name} name='name' onChange={onChange} 
                        placeholder='Enter your name' required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
    );
}

export default Edit;