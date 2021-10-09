import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./containers/landingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
