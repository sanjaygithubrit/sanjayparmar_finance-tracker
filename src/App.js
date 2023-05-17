import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Addtransaction } from "./Finance/Addtransaction";
import { Alltransaction } from "./Finance/Alltransaction";
import { View } from "./Finance/View";
import Register from "./Register";
import Login from "./Login";
import Authentication, {
  Authenticationlogin,
} from "./Authentication/Authentication";
import { Main } from "./Context/Context";
import { BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
  <Main>
<BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Authenticationlogin />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/" element={<Authentication />}>
          <Route path="/addtransaction" element={<Addtransaction />}>
            <Route path=":id" element={<Addtransaction />} />
          </Route>

          <Route path="/alltransaction" element={<Alltransaction />} >
          <Route path=":id" element={<Alltransaction />} /> 
          </Route>
          <Route path="/View" element={<View />} />
        </Route>
      </Routes>
      </BrowserRouter>
      </Main>

  );
};

export default App;
