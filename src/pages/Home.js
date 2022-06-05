import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";

const Home = () => {
  return (
    <div>
      <JumbotronContainer />
      <FooterContainer />
      <FaqsContainer />
    </div>
  );
}

export default Home