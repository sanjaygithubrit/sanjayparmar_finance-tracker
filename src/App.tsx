import "./App.css";
import {Register} from "./Users/Register";
import {Login} from "./Users/Login";
import Authentication from "../src/Authentication/Authentication";
import{  Alltransaction } from "./pages/transaction/Alltransaction";
import { Addtransaction } from "./pages/transaction/Addtransaction";
import { View } from "./pages/transaction/component/View";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

function Fallback( error:any):any {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">

          <Route path="" element={<Navigate to={`/alltransaction`} />} />

          <Route path="register" element={<ErrorBoundary  FallbackComponent={Fallback}>
          <Authentication public={true} cmp={<Register />}/>
          </ErrorBoundary>} />

          <Route path="login" element={<Authentication public={true} cmp={<Login />}/>} />
          
          <Route path="alltransaction">
            <Route path="" element={<Authentication public={false} cmp={<Alltransaction />}/>} />
            <Route path="edit/:id" element={<Authentication public={false} cmp={<Addtransaction />}/>} />
              <Route path="addtransaction" element={<Authentication public={false} cmp={<Addtransaction />}/>}/>
            <Route path="View" element={<Authentication public={false} cmp={<View />}/>} />
          </Route>
        </Route>
      </Routes>    
    </BrowserRouter>
    
  );
}

export default App;
