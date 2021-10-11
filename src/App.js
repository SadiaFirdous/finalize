import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./containers/landingPage";
import createGroup from "./components/inApp/Creategroup";
import YourGroup from "./components/inApp/YourGroups";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/YourGroups" component={YourGroup} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
