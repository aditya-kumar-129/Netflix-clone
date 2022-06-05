import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";
import { useAuthListener } from "./hooks";
function App() {
  const {user} = useAuthListener();
  console.log(user);
  return (
    <Fragment>
      <Routes>
        {/* https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou */}
        <Route path="/" element={ <IsUserRedirect user={user}> <Home /> </IsUserRedirect> } />
        <Route path="/signIn" element={ <IsUserRedirect user={user}> <SignIn /> </IsUserRedirect> } />
        <Route path="/signUp" element={ <IsUserRedirect user={user}> <SignUp /> </IsUserRedirect> } />
        <Route path="/browse" element={ <ProtectedRoute user={user}> <Browse /> </ProtectedRoute> } />
        <Route path="*" element={<p>404 page</p>} />
      </Routes>
    </Fragment>
  );
}

export default App;
