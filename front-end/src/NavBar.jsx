import { Link } from 'react-router-dom'
import logo from './assets/logo.svg'

export default function NavBar(){
    return(
        <nav className='flex h-fit w-3/5 flex-row justify-between mt-[2vh]' id="navbar">
            <Link to={'/'}><img style={{"filter":"drop-shadow(2px 3px 2px rgb(143 96 169 / 0.7))"}} className='h-[7vh]' src={logo} alt="Mark.It Logo" /></Link>
            <div className='w-1/2 flex flex-row justify-between place-items-center'>
                <Link to={'/'}>HOME</Link>
                <Link to={'/personal'}>PERSONAL</Link>
                <Link to={'/signin'}>SIGN IN</Link>
                <Link to={'/register'}>JOIN NOW</Link>
            </div>
        </nav>
    )
}