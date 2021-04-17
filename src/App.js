import {BrowserRouter as Router, Route} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import Nav from "./component/Nav"
import Home from "./component/Home"
import Cart from "./component/Cart"
import Details from "./component/Details";

function App() {
  return (
    <Router>
    <Provider store={store}>
     <Nav></Nav>
     <Route path="/" exact component={Home} />
     <Route path="/cart" exact component={Cart} />
     <Route path="/details/:id" exact component={Details} />
     </Provider>
    </Router>
    
  );
}

export default App;
