import Home from "./pages/Home";
import Reserve from "./pages/Reserve";
import {Route, Switch, Router} from "wouter"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/reserve" component={Reserve} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;