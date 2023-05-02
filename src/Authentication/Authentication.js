
import { Outlet,Navigate} from 'react-router-dom';



export default function Authentication () {

   const auth = localStorage.getItem("Token");



    return auth ? <Outlet/> : <Navigate to={"/login"}/>
    
}