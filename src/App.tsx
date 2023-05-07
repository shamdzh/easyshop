import React from "react";
import { MainPage } from "./pages/MainPage";
import { GlobalStyle } from "./themes/globalStyle";
import { Layout } from "./components/Layout";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <MainPage />
      </Layout>
    </div>
  );
};

export default App;
