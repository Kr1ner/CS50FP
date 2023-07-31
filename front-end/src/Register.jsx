export default function Register(){
    return(
        <div id="register" className='w-full bg-no-repeat bg-home-background bg-cover  h-screen flex justify-center place-items-center'>
            <form  style={{"filter":"drop-shadow(10px 30px 30px rgb(255 163 175 / 0.4))"}} className="w-[35vw] h-[45vw] bg-[#ed78c44f]/[.2] rounded-3xl text-center place-content-center" id="formcontainer">
                <h3 className="font-main text-white text-[2vw]">Register</h3>
                <input type="text" name="fname" placeholder="Name and Surname"/>
                <input type="text" name="nname" placeholder="Nick Name"/>
                <input type="text" name="email" placeholder="email"/>
                <input type="password" name="pass" placeholder="password"/>
                <input type="password" name="pass" placeholder="Reenter password"/><br></br>
                <input type="submit" />
            </form>
        </div>
    )
}