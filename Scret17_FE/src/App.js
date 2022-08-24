import React from "react";
import Authmiddleware from "./routes/middleware/Authmiddleware";
import { userRoutes } from "./routes/allRoutes";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              // layout={Layout}
              component={route.component}
              key={idx}
              // isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
