import react from 'react'
import Navbar from "../components/common/Navbar"
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

const Layout =()=>{
    return(
        <div className= 'site-shell'>
            <Navbar/>
            <main className='page-shell'>
                <Outlet></Outlet>
            </main>
            <Footer/>
            </div>
    )
}

export default Layout;