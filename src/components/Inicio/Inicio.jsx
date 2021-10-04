import Nav from "../Nav/Nav"
import Logo from "../Logo/Logo"
import Login from "../Login/Login"
export default function Inicio(){
    return(
        <>
            <Nav/>
            <div className="inicio">
                <Logo/>
                <Login/>
            </div>
        </>
    )
}