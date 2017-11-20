import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import { Link } from 'react-router-dom';

import { NavButtonToggle } from '../styled/NavDrawer';

class NavDrawer extends Component {
  state = {
    open: true,
    width: 250,
  };

  toggle = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open,
      };
    });
  };

  render() {
    return (
      <div>
        <NavButtonToggle toggle={this.toggle} {...this.state} />
        <Drawer open={this.state.open} width={this.state.width}>
          <div style={{ height: 200, width: '100%', background: 'salmon' }}>
            Login COntainer
          </div>
          <Divider />
          <Link to="/">
            <MenuItem primaryText={'Play'} onTouchTap={this.toggle} />
          </Link>
          <Link to="/profile">
            <MenuItem primaryText={'Profile'} onTouchTap={this.toggle} />
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
