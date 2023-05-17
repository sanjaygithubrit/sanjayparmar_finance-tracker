import "./App.css";
import Register from "./Register";
import Login from "./Login";
import Authentication from "./Authentication/Authentication";
import{  Alltransaction } from "./Component/Alltransaction";
import { Addtransaction } from "./Component/Addtransaction";
import { View } from "./Component/View";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<Navigate to={`/alltransaction`} />} />

          <Route path="register" element={<Authentication public={true} cmp={<Register />}/>} />

          <Route path="login" element={<Authentication public={true} cmp={<Login />}/>} />
          
          <Route path="alltransaction">
            <Route path="" element={<Authentication public={false} cmp={<Alltransaction />}/>} />

            <Route path="addtransaction" element={<Authentication public={false} cmp={<Addtransaction />}/>}>
              <Route path=":id" element={<Authentication public={false} cmp={<Addtransaction />}/>} />
            </Route>
            <Route path="View" element={<Authentication public={false} cmp={<View />}/>} />
          </Route>
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
