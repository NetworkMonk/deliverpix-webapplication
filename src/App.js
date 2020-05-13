import React from "react";
import { AppContextProvider } from "./context";
import ApplicationRouter from "./router";
import "./tailwind.generated.css";
import Container from "./components/common/Container";

function App() {
  const userName = "Not logged in";

  return (
    <div className="App">
      <AppContextProvider username={userName}>
        <Container>
          <ApplicationRouter></ApplicationRouter>
        </Container>
      </AppContextProvider>
    </div>
  );
}

export default App;
