import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Principal.css'

export default function Principal(props){
    return(
        <>
            <Header/>
            <main>
                {props.children}
            </main>   
            <Footer/>
        </>
    )
}