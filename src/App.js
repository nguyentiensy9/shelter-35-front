import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
// import Avatar from "./components/Avatar/Avatar";
import AgeRes from "./components/Age_restriction/Age_restriction";
import FAQ from "./components/FAQ/faq";
import "./App.css";
import Post from "./components/Post/Post";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("Component did mount");
  }

  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route path="/" exact component={AgeRes} />
            <Route path="/new-post" component={Post} />
            <Route path="/home" component={Home} />
            <Route path="/faq" component={FAQ} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
