import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

const TheCountdown = () => (<iframe title='the-countdown' src="https://www.youtube.com/embed/9jK-NcRmVcw?start=117" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>)

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/untdown">
            <TheCountdown />
          </Route>
          <Route path="*">
            <Redirect to="/untdown" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
