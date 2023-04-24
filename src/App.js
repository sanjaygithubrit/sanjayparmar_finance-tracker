
import './App.css';
import { Route, Routes} from 'react-router-dom';

// import User1 from './src/pages/User/User';
// import Post1 from './src/pages/User/Post';
  import  User1 from './pages/User/User';
  import Post1 from './pages/Post/Post';
  import { Form } from './forms/Form';

const App = () => {
  
  return (
    
    <div>

      
   <Routes>
      
       <Route  path='/' element={<User1 />}/> 
        <Route  path='/user-post' element={<Post1 />}/>  
        <Route  path='/form' element={<Form />}/> 
  
    </Routes>
    </div>
    
  )

}

export default App;
