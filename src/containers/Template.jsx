import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InjectTapEventPlugin from 'react-tap-event-plugin';

import TicTacToe from './TicTacToe';
import Profile from './Profile';
import NavDrawer from '../components/NavDrawer';
import { Main, Header } from '../styled/Template';

InjectTapEventPlugin();

class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer />
          <Header>tictacturing</Header>

          <Main>
            <Route path="/" exact component={TicTacToe} />
            <Route path="/profile" exact component={Profile} />
          </Main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Template;
