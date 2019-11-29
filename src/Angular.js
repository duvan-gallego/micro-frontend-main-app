
import React, { Component } from 'react';

import 'package-angular';

class Angular extends Component {
  render() {
    return (
      <div className="angular-app">
        Angular app
        <angular-app ref={elem => this.nv = elem}  />
      </div>
    );
  }
}

export default Angular;