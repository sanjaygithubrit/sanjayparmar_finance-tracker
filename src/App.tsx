import "./App.css";
import {Register} from "./Users/Register";
import {Login} from "./Users/Login";
import Authentication from "../src/Authentication/Authentication";
import{  Alltransaction } from "./pages/transaction/Alltransaction";
import { Addtransaction } from "./pages/transaction/Addtransaction";
import { View } from "./pages/transaction/component/View";
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
