import { Link } from 'react-router-dom';
export default function Register(){
    return(
        <div id="register" className='w-full bg-no-repeat bg-home-background bg-cover  h-screen flex justify-center place-items-center'>
            <form  style={{"filter":"drop-shadow(10px 30px 30px rgb(239 190 222 / 1))"}} className="w-[35vw] h-[45vw] flex flex-col justify-start items-center bg-[#fff]/[.4] rounded-3xl text-center place-content-center" id="formcontainer">
                <h3 className="font-main text-[#8F60A9] text-[2vw] mb-[5%]">Register</h3>
                <input className="w-3/5 h-[5vh] rounded-3xl text-center mb-[5%]" type="text" name="fname" placeholder="Name and Surname"/>
                <input className="w-3/5 h-[5vh] rounded-3xl text-center mb-[5%]" type="text" name="nname" placeholder="Nick Name"/>
                <input className="w-3/5 h-[5vh] rounded-3xl text-center mb-[5%]" type="text" name="email" placeholder="email"/>
                <input className="w-3/5 h-[5vh] rounded-3xl text-center mb-[5%]" type="password" name="pass" placeholder="password"/>
                <input className="w-3/5 h-[5vh] rounded-3xl text-center mb-[5%]" type="password" name="pass" placeholder="Reenter password"/>
                <input className="w-1/4 h-[5vh] rounded-3xl text-center bg-[#8F60A9] text-white hover:cursor-pointer hover:text-[#8F60A9] hover:bg-[#EFBEDE] duration-100 hover:duration-100 ease-in-out" type="submit" />
                <Link className='underline-offset-1	underline text-[#8F60A9] font-main' to='/signin'>Already Registered?Sign in</Link>
                <Link className='underline-offset-1	underline text-[#8F60A9] font-main' to='/'>Back to Home</Link>
            </form>
        </div>
    )
}