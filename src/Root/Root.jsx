
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Root = () => {
    return (
        <div className='px-12 lg:px-36  bg-[#f7f7f7]'>
            <NavBar className=" "></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;