import { NavLink } from 'react-router-dom'
import logo from './assets/logo.svg'

export default function NavBar(){
    return(
        <nav className='flex h-fit w-3/5 flex-row justify-between ' id="navbar">
            <NavLink to={'/'}><img style={{"filter":"drop-shadow(2px 3px 2px rgb(143 96 169 / 0.7))"}} className='h-[7vh]' src={logo} alt="Mark.It Logo" /></NavLink>
            <div className='w-1/2 flex flex-row justify-between place-items-center font-main'>
                <NavLink className='text-[#D196FF] text-[0.9vw] duration-100 hover:text-[#8F60A9]' to={'/'}>HOME</NavLink>
                <NavLink className='text-[#D196FF] text-[0.9vw] hover:text-[#8F60A9] duration-100' to={'/personal'}>PERSONAL</NavLink>
                <NavLink className='text-[#D196FF] text-[0.9vw] hover:text-[#8F60A9] duration-100' to={'/signin'}>SIGN IN</NavLink>
                <NavLink style={{"filter":"drop-shadow(2px 3px 4px rgb(143 96 169 / 0.4))"}} className='inline-block text-center bg-[#8F60A9] px-5 py-2 rounded-md text-[#E5E5E5] text-[0.9vw] duration-100 hover:bg-[#D196FF] duration-100' to={'/register'}>JOIN NOW</NavLink>
            </div>
        </nav>
    )
}