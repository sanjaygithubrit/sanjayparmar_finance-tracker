
import './App.css';
import { Addtransaction } from './Component/Addtransaction';
import { BrowserRouter} from 'react-router-dom';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
      <Route path="/addtransaction" element={<Addtransaction />}>
            <Route path=":id" element={<Addtransaction />} />
            </Route>
      </Routes>
    </BrowserRouter>
    
 
  );
}

export default App;
