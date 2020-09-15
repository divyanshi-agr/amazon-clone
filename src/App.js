import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HRgV7GX280hyz86MrKmNrPkWpzmqKl2E6HhjbCoONHmZDtxPSofL0a0xPKVuGhmUG0x44huqsdqpysIA7rw6zuX00NT6Iz0e2"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads...

    auth().onAuthStateChanged((authUser) => {
      console.log("the user is >>>>", authUser);

      if (authUser) {
        //if user was/is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/* Default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
