import React from "react";
import { AppContextProvider } from "./app/context";
import { ApplicationRouter, ApplicationSwitch } from "./app/router/Router";
import Container from "./components/common/Container";
import Nav from "./components/nav/Nav";
import IconLibrary from "./app/icon-library/IconLibrary";
import "./tailwind.generated.css";

IconLibrary();

function App() {
  const userName = "Not logged in";

  return (
    <div className="App">
      <AppContextProvider username={userName}>
        <ApplicationRouter>
          <Nav></Nav>
          <Container>
            <ApplicationSwitch></ApplicationSwitch>
          </Container>
        </ApplicationRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
