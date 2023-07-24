import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectRoute = ({Component}) => {
    const navigate = useNavigate()
    useEffect(()=>{
       const userLogin = localStorage.getItem("login");
        if(!userLogin){
            navigate('/login');
        }
    })
    return <>
    <Component/>
    </>
}
export default ProtectRoute;