import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./containers/landingPage";
import createGroup from "./components/inApp/Creategroup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Creategroup" component={createGroup} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
