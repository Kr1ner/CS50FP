import logo from './assets/logo.svg'
export default function NavBar(){
    return(
        <div id="navbar">
            <img style={{"filter":"drop-shadow(2px 3px 2px rgb(143 96 169 / 0.7))"}} className='h-[7vh]' src={logo} alt="Mark.It Logo" />
        </div>
    )
}