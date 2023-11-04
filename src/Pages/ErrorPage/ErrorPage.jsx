
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
           <div>
           <h1 className='text-[#FF444A] text-4xl font-bold mb-8'>404 - Not Found!</h1>
            <NavLink to="/">
                
              <div className='flex justify-center'>
              <button className='text-lg text-[#FFF] font-semibold px-7 py-3 bg-[#21AA81] rounded-lg'>
               Go Home
               </button>
              </div>
                
                </NavLink>
           </div>
        </div>
    );
};

export default ErrorPage;