import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "./components/Landing";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);
