
import { Outlet,Navigate} from 'react-router-dom';



export default function Authentication () {

   const auth = localStorage.getItem("Token");

    return auth ? <Outlet/> : <Navigate to={"/login"}/>
    
}

export  function Authenticationlogin () {

    const auth = localStorage.getItem("Token");
    
     return auth ? <Navigate to={"/alltransaction"}/>: <Outlet/>
     
 }