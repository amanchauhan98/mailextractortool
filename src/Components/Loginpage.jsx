import React, { useState, useEffect } from 'react'
import '../App.css'
import validator from 'validator'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

    // if login is true then navigate to home page
    useEffect(()=>{
      let userLogin = localStorage.getItem("login");
      if(!userLogin){
        navigate('/login');
      }
    })

    const [data, setData] = useState({
        email : "",
        password : "",
    })

    const handleLogin = (event) => {
        const {name, value} = event.target;
        setData({
            ...data,
            [name] : value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailValue = validator.isEmail(data.email);
        if(!emailValue){
            return alert("E-mail is Invalid, Enter your correct email!")
        }
        if( !(data.password.length >= 8) ){
            return alert("Password should be min 8 lenght and,  must contain symbol, numeric & alphabet!")
        }
        // login auth of user
        const {email, password} = data
        console.log(email, password);
        const userEmail = localStorage.getItem("useremail");
        const userPassword = localStorage.getItem("userpassword");
        if(email != userEmail || password != userPassword){
          localStorage.setItem("login", false);
          alert("Please enter the correct email and password!")
        }
        if(email == userEmail && password == userPassword){
          localStorage.setItem("login", true);
          navigate('/')
        }

        return alert("all are set, correct!")
    }
    
    // handle forget password function
    const handleForgetPassword = () => {
      alert("You Should SignUp with new E-mail Id")
      setTimeout(() => {
        navigate('/register')
      }, 2000);
    }

    return <>
    <div className='login-bg h-fit w-full'>
    {/* <!-- component -->
<!-- Container --> */}
  <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10">
  
  {/* <!-- Login component --> */}
  <div className="flex shadow-md ">
    {/* <!-- Login form --> */}
    <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{width : "24rem", height : "32rem"}}>
      <div className="xl:w-72 md:w-80">
        {/* <!-- Heading --> */}
        <h1 className="text-xl font-semibold text-red-500">Welcome back</h1>
        <small className="text-gray-400 ">Welcome back! Please enter your details</small>

        {/* <!-- Form --> */}
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Email</label>
            <input value={data.email} name='email' onChange={handleLogin} type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 py-1 px-1.5 text-gray-500" />
          </div>

          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Password</label>
            <input value={data.password} name='password' onChange={handleLogin} type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 py-1 px-1.5 text-gray-500" />
          </div>

          <div className="mb-3 flex flex-wrap content-center">
            <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" /> 
            <label for="remember" className="mr-auto text-xs font-semibold">Remember for 30 days</label>
            <NavLink  onClick={handleForgetPassword}><a className="text-xs font-semibold text-red-500">Forgot password?</a></NavLink>
          </div>

          <div className="mb-3">
            <button className="mb-1.5 block w-full text-center text-white bg-red-500 hover:bg-transparent hover:text-red-500 font-medium duration-500 delay-200 border-[0.02rem] border-red-500 px-2 py-1.5 rounded-md">Sign in</button>
            <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
              <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/>
              Sign in with Google
            </button>
          </div>
        </form>

        {/* <!-- Footer --> */}
        <div className="text-center">
          <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
          <NavLink to={'/register'}><a  className="text-xs font-semibold text-red-500">Sign up</a></NavLink>
        </div>
      </div>
    </div>

    {/* <!-- Login banner --> */}
    <div className="lg:flex lg:flex-wrap hidden content-center justify-center rounded-r-md" style={{width : "24rem", height : "32rem"}}>
      <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://i.imgur.com/9l1A4OS.jpeg"/>
    </div>

  </div>

  
</div>
    </div>
    </>
}
export default Login