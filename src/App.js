import React from 'react';
import './App.css';
import Services from './components/Services';
import About from './components/About';
// import Products from './components/Delete/Products';
import Emotions from './components/Emotions';
// import ProductsCreate from './components/Delete/ProductsCreate';
// import ProductsPreview from './components/Delete/ProductsPreview';
// import ProductsShow from './components/Delete/ProductsShow';
// import ProductsEdit from './components/Delete/ProductsEdit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  IndexRoute,
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

var uniqid = require('uniqid');

let user = [
  {
    id: uniqid(),
    name: "iPad",
    ean: 5,
    type: "tablet",
    weight: 450,
    color: "pink",
    quantity: 56,
    active: 1,
    price: 200
  },
  {
    id: uniqid(),
    name: "iPhone",
    ean: 3,
    type: "phone",
    weight: 180,
    color: "rose",
    quantity: 5,
    active: 1,
    price: 650
  },
  {
    id: uniqid(),
    name: "macbook",
    ean: 3,
    type: "laptop",
    weight: 2000,
    color: "pink",
    quantity: 2,
    active: 1,
    price: 650
  }
];

let selectedProduct = {};

// let user = [];
localStorage.setItem('user', JSON.stringify(user));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem('user')),
    };

    console.log('App constructor - user: ' + user);
  }

  render() {
    const util = require('util');

    let myObjProducts = this.state.user;

    console.log('State from app: ' + this.state.user);
    console.log(
      'Util Products:  ' + util.inspect(myObjProducts, false, null, true)
    );

    return (
      <div>
      
        <Router>
          <div className="">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
  
          <div className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link to={"/emotions"} className="nav-link">
                Emotion Map
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/services"} className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
          </div>
        </nav>
            <Switch>
              <Route exact path="/services" component={Services} />
              <Route exact path="/about" component={About} />
              <Route exact path="/emotions" component={Emotions} />
              {/* <Route
                exact
                path="/emotion"
                render={(props) => (
                  <Emotions
                    {...props}
                    user={user}
                  />
                )}
              /> */}
              <Route render={() => <h3>Not found</h3>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
