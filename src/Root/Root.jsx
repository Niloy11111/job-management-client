
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Root = () => {
    return (
        <div className='px-12 lg:px-36 pt-8 lg:pt-14 bg-[#f7f7f7]'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;