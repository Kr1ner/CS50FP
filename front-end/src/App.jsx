import NavBar from './NavBar.jsx'
import FloatingBook from './assets/FloatingBook.png';
import { Link } from 'react-router-dom';
import msdwn from './assets/msdwn.svg';
import {ReactComponent as Easy} from './assets/easy.svg';
function App() {
  return (
    <div id='home' className='w-full bg-no-repeat bg-home-background bg-cover h-[305vh]'>
      <div id='homedisplay' className='w-full h-screen flex flex-col items-center justify-around'>
        <NavBar/>
        <header className='w-[70%] h-[57vh] flex flex-row items-center place-items-center justify-between'>
          <div className='w-[55%] h-full flex flex-col justify-around' id='headtext'>
            <h1 className='font-main text-[#8F60A9] text-[3.1vw]'>Read, review and track <br/>your book reading <br/> progress.</h1>
            <h5 className='font-secondary text-right text-[#D196FF] font-semibold'>First online website for making your book tracking experience better and many more features combined in one website.</h5>
            <section className='w-full flex flex-row justify-between'>
              <Link style={{"filter":"drop-shadow(2px 3px 4px rgb(143 96 169 / 0.4))"}} className='inline-block text-center bg-[#8F60A9] px-5 py-2 rounded-full text-[#E5E5E5] font-secondary text-[1vw] font-semibold hover:bg-[#D196FF] duration-100' to={'/register'}>START YOUR JOURNEY TODAY</Link>
              <Link onClick={()=>{var locdiv = document.getElementById("imgholder1");var rect = locdiv.getBoundingClientRect();var x = rect.x; window.scrollTo(0,x)}} style={{"filter":"drop-shadow(2px 3px 4px rgb(143 96 169 / 0.4))"}} className='inline-block text-center  px-5 py-2 rounded-full text-[#8F60A9] font-secondary text-[1vw] border-2 border-[#8F60A9] font-semibold hover:border-[#D196FF] hover:text-[#D196FF] duration-100' to={''}>MORE ABOUT WEBSITE</Link>
            </section>
          </div>
          <div id='homeheaddimg' className='w-[29vw] h-fit'>
            <img src={FloatingBook} alt="logo" />
          </div>
        </header>
        <img onClick={()=>{let x=window.innerHeight; window.scrollTo(0,x)}} className='w-5 hover:cursor-pointer' src={msdwn} alt='mousedownicon'></img>
      </div>
      <section className='w-full h-[50vh] mt-[5vh] flex flex-row items-center justify-center' id='homecards'>
        <ul className='w-2/3 h-3/4 flex flex-row justify-around' id='cardsholder'>
          <li style={{"filter":"drop-shadow(10px 18px 5px rgb(239 190 222))"}} className='w-1/4 h-full flex flex-col bg-[#D196FF]/[.4] rounded-[15%] items-center hover:cursor-default hover:scale-110 duration-75 hover:duration-75 ease-in-out' id='card1'>
            <div className='w-2/5 h-1/3 flex flex-row justify-center place-content-center bg-[#E291FF]/[.5] rounded-xl -mt-[20%]' id='imgholder1'><Easy className='w-[85%] h-[85%]'/></div>
            <h3 className='text-[1.5vw] font-main text-[#8F60A9]'>Easy to use</h3>
            <p className=''></p>
          </li>
          <li style={{"filter":"drop-shadow(10px 18px 5px rgb(239 190 222))"}} id='card2' className='w-1/4 h-full flex flex-col bg-[#D196FF]/[.4] rounded-[15%] items-center hover:cursor-default hover:scale-110 duration-75 hover:duration-75 ease-in-out'>
          <div className='w-2/5 h-1/3 bg-[#E291FF]/[.5] rounded-xl -mt-[20%]' id='imgholder2'></div>
          <h3 className='text-[1.5vw] font-main text-[#8F60A9]'>Completely FREE</h3>

          </li>
          <li style={{"filter":"drop-shadow(10px 18px 5px rgb(239 190 222))"}} id='card3' className='w-1/4 h-full flex flex-col bg-[#D196FF]/[.4] rounded-[15%] items-center hover:cursor-default hover:scale-110 duration-75 hover:duration-75 ease-in-out'>
          <div className='w-2/5 h-1/3 bg-[#E291FF]/[.5] rounded-xl -mt-[20%]' id='imgholder3'></div>
          <h3 className='text-[1.5vw] font-main text-[#8F60A9]'>Always on Sync</h3>          </li>
        </ul>
      </section>
      <section id='aboutus'>

      </section>
      <footer>

      </footer>
    </div>
  )
}

export default App