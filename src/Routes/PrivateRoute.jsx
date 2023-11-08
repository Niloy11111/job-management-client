import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

import toast from 'react-hot-toast';



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext) ;

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
        return children ;
    }

    else{
        
        toast.error('Please Register First!')
      
        return <Navigate to="/login"></Navigate>
    }
};

export default PrivateRoute;