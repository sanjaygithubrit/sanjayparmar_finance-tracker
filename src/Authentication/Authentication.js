
import { Outlet,Navigate} from 'react-router-dom';



export default function Authentication () {

   const auth = localStorage.getItem("Token");
 
   if (auth) {
    return <Outlet/>
   }else{
    return <Navigate to={"/login"}/>
   }

    // return auth ? <Outlet/> : <Navigate to={"/login"}/>
    
}

export  function Authenticationlogin () {
    const registerdata = localStorage.getItem("Register")
    console.log(registerdata,"sanjayaas");
    
    const auth = localStorage.getItem("Token");
    
     return auth ? <Navigate to={"/alltransaction"}/>: <Outlet/>
     
 }