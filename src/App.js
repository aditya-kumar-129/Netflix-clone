import { Fragment } from "react";
import { JumbotronContainer } from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";
function App() {
  return (
    <Fragment>
      <JumbotronContainer />
      <FooterContainer />
    </Fragment>
  );
}

export default App;
