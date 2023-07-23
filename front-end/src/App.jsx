import NavBar from './NavBar.jsx'
import FloatingBook from './assets/FloatingBook.png';
import { Link } from 'react-router-dom';
import msdwn from './assets/msdwn.svg';
function App() {
  return (
    <div id='home' className='w-full bg-no-repeat bg-home-background bg-contain h-[305vh]'>
      <div id='homedisplay' className='w-full h-screen flex flex-col items-center justify-around'>
        <NavBar/>
        <header className='w-[70%] h-[57vh] flex flex-row items-center place-items-center justify-between'>
          <div className='w-[55%] h-full flex flex-col justify-around' id='headtext'>
            <h1 className='font-main text-[#8F60A9] text-[3.1vw]'>Read, review and track <br/>your book reading <br/> progress.</h1>
            <h5 className='font-secondary text-right text-[#D196FF] font-semibold'>First online website for making your book tracking experience better and many more features combined in one website.</h5>
            <section className='w-full flex flex-row justify-between'>
              <Link style={{"filter":"drop-shadow(2px 3px 4px rgb(143 96 169 / 0.4))"}} className='inline-block text-center bg-[#8F60A9] px-5 py-2 rounded-full text-[#E5E5E5] font-secondary text-[1vw] font-semibold' to={'/register'}>START YOUR JOURNEY TODAY</Link>
              <Link style={{"filter":"drop-shadow(2px 3px 4px rgb(143 96 169 / 0.4))"}} className='inline-block text-center  px-5 py-2 rounded-full text-[#8F60A9] font-secondary text-[1vw] border-2 border-[#8F60A9] font-semibold' to={'/register'}>START YOUR JOURNEY TODAY</Link>
            </section>
          </div>
          <div id='homeheaddimg' className='w-[29vw] h-fit'>
            <img src={FloatingBook} alt="logo" />
          </div>
        </header>
        <img onClick={()=>{window.scrollBy(0,500)}} className='w-5 hover:cursor-pointer' src={msdwn} alt='mousedownicon'></img>
      </div>
    </div>
  )
}

export default App