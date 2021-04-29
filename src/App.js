import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JobsGroup from "./components/JobsGroup";
import SearchPage from "./components/SearchPage";
import JobDetail from "./components/JobDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route exact path="/jobDetails/:id">
            <JobDetail />
          </Route>
          <Route exact path="/favorites">
            <MyHeader />
            <Favorites />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
