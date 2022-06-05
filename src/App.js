import { Fragment } from "react";

import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Browse from "./pages/Browse";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="*" element={<p>404 page</p>} />
      </Routes>
    </Fragment>
  );
}

export default App;
