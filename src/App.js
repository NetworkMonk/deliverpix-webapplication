import React from "react";
import { AppContextProvider } from "./app/context";
import { ApplicationRouter, ApplicationSwitch } from "./app/router/Router";
import Nav from "./components/nav/Nav";
import IconLibrary from "./app/icon-library/IconLibrary";
import "./tailwind.generated.css";
import Footer from "./components/footer/Footer";

IconLibrary();

function App() {
  const userName = "Not logged in";

  return (
    <div className="App">
      <AppContextProvider username={userName}>
        <ApplicationRouter>
          <Nav></Nav>
          <ApplicationSwitch></ApplicationSwitch>
          <Footer></Footer>
        </ApplicationRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
