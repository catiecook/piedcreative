import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          
{/* This below will show data form the express backend */}
          {/* <div>{this.state.users.map(user =>
            <div key={user.id}>
              {user.username}
            </div>
            )}
          </div> */}

          <div>
            {this.props.children}
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
