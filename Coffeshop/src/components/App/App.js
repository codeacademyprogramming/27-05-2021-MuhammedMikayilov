import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Coffees from "../Coffees";
import Header from "../Header";
import OrderList from "../OrderList";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Coffees />
        </Route>
        <Route path="/order_list" exact>
          <OrderList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
