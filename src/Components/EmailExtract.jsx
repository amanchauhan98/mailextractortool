import React , {useState} from 'react'
import { NavLink } from 'react-router-dom';
// import MonacoEditor from './CodeEditor';

const EmailExtract = () => {

    const [emailValue, setEmailValue] = useState("");
    const [listOfEmail, setListOfEmail] = useState([])
    const [emailArray, setEmailArray]  = useState()

    const handleEmailValue = (event) => {
        setEmailValue(event.target.value);
    }
    function extractEmails(text) {
        const emailRegex = /[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}/g;
        const emails = text.match(emailRegex) || [];
        return emails;
      }

    const getEmailList = (event) => {
        event.preventDefault();
        if(emailValue == ""){
            alert("Please Enter the raw text here...")
        }

        const email_list = extractEmails(emailValue)
        setListOfEmail(email_list);  
        showEmailArray()

    }

    function showEmailArray(){
        setEmailArray(listOfEmail)
    }
// console.log(emailArray)
    function ExtractorHead(){
        return <>
        <div className='xl:w-[30rem] md:w-[24rem] w-[18rem] py-4 md:py-6 h-fit mx-auto xl:py-[2rem] xl:px-4  rounded-xl bg-gradient-to-r from-yellow-500 via-red-400 to-orange-400 shadow-xl drop-shadow-2xl shadow-yellow-300 '>
            <NavLink to={'/'}><h1 className='xl:text-5xl md:text-3xl text-2xl font-serif text-white font-medium text-center'>E-Mail Extractor Tool</h1></NavLink>
        </div>
        </>
    }

    function WriteTextEmail(str){
        return <>
        <div className='xl:px-[22rem] md:px-[10rem] md:pt-[2rem] xl:pt-[5rem] lg:px-[17rem]  px-[5rem] w-full h-fit overflow-hidden relative'>
            <h1 className='text-white xl:text-3xl text-lg md:text-xl lg:text-2xl font-serif font-medium'>{str}</h1>
        </div>
        </>
    }

    function textAreaComp1(){
        return<>
        <div className='xl:w-[40rem] xl:h-[15rem] w-[20rem] h-[12rem] md:w-[27rem] md:h-[13rem] lg:w-[35rem] lg:h-[13.5rem]  mx-auto relative overflow-hidden '>
            <textarea value={emailValue} onChange={handleEmailValue} name="emailvalue" id="" className='xl:w-[40rem] w-[20rem] h-[12rem] xl:h-[15rem]  md:w-[27rem] md:h-[13rem] lg:w-[35rem] lg:h-[13.5rem]  px-[1rem] py-[1rem]  placeholder:text-gray-200 placeholder:font-medium bg-[#222] text-gray-200' placeholder='Enter your raw text here...'>hello</textarea>
        </div>
        </>
    }

    function textAreaComp2(){
        return<>
        <div className='xl:w-[40rem] xl:h-[15rem] w-[20rem] h-[12rem] lg:w-[35rem] lg:h-[13.5rem]  md:w-[27rem] md:h-[13rem] mx-auto relative overflow-hidden '>
            <textarea value={emailArray}  name="emailvalue" id="" className='xl:w-[40rem] w-[20rem] xl:h-[15rem] h-[12rem]  px-[1rem] py-[1rem] lg:w-[35rem] lg:h-[13.5rem]  md:w-[27rem] md:h-[13rem] placeholder:text-gray-200 placeholder:font-medium bg-[#222] text-gray-200' placeholder='See your result here...'></textarea>
        </div>
        </>
    }

    function MagicButton(){
        return <>
        <div className='xl:px-[22rem] px-[5rem] xl:py-[2rem] py-[1.3rem] md:px-[11rem] md:py-[2rem] relative overflow-hidden lg:px-[16rem] '>
            <button  className='text-lg text-white font-serif px-10 py-3 bg-orange-500 hover:bg-transparent  hover:border-[0.01rem] border-pink-500 duration-500 delay-300'>See Magic</button>
        </div>
        </>
    }
    return <>
    <div className='bg-emailex h-fit   w-full xl:pt-[4rem] pt-[2rem]'>
        {ExtractorHead()}
        {WriteTextEmail("Enter the Text here :")}
        <br />
        <form onSubmit={getEmailList}>
            {textAreaComp1()}
            {MagicButton()}
        </form>
        {WriteTextEmail("Output : ")}
        <br />
        {textAreaComp2()}
      
        <br />
        {/* <MonacoEditor/> */}
    </div>
    </>
}
export default EmailExtract