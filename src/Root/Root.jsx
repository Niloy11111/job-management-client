import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='px-12 lg:px-36  bg-[#f7f7f7]'>
            <NavBar className=" "></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Root;