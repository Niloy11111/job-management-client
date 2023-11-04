
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Root = () => {
    return (
        <div className='mx-12 lg:mx-36 mt-8 lg:mt-14'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;