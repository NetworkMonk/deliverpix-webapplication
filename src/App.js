import React from "react";
import { AppContextProvider } from "./context";
import { ApplicationRouter, ApplicationSwitch } from "./router/Router";
import Container from "./components/common/Container";
import "./tailwind.generated.css";
import Nav from "./components/nav/Nav";

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
