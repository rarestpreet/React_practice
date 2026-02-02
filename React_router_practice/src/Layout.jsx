import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer';
import { Outlet } from 'react-router';

function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;