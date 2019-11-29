
import React, { Component } from 'react';
import 'package-react';
import 'package-angular';

class Both extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.refReactApp = React.createRef();
    this.refAngularApp = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.onHelloFromAngular = this.onHelloFromAngular.bind(this);
    this.onHelloFromReact = this.onHelloFromReact.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
    this.refReactApp.current.name = event.target.value;
  }

  componentDidMount() {
    this.refAngularApp.current.addEventListener("helloEvt", this.onHelloFromAngular);
    this.refReactApp.current.addEventListener("helloFromReact", this.onHelloFromReact);
  }

  componentWillUnmount() {
    // Make sure to remove the DOM listener when the component is unmounted.
    this.refAngularApp.current.removeEventListener("helloEvt", this.onHelloFromAngular);
    this.refReactApp.current.removeEventListener("helloFromReact", this.onHelloFromReact);
  }

  onHelloFromAngular() {
    const text = "HELLO FROM ANGULAR";
    this.setState({name: text});
    this.refReactApp.current.name = text;
  }

  onHelloFromReact() {
    const text = "HELLO FROM REACT";
    this.setState({name: text});
    this.refReactApp.current.name = text;
  }

  render() {
    return (
        <div className="both-apps">
          <h1>Both apps</h1>
          <div>
            Input main app:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div>
            State main app:
            {this.state.name}
          </div>

          <div className="angular-app-both">
            Angular app
            <angular-app name={this.state.name} ref={this.refAngularApp} />
          </div>
          <div className="react-app-both">
            React app
            <react-app name={this.state.name} ref={this.refReactApp}  />
          </div>
        </div>
    );
  }
}

export default Both;