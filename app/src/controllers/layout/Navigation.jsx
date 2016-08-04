import React from 'react';

import {Link} from 'react-router';
import css from './Navigation.scss';

const Navigation = React.createClass({
  render() {
    return (
      <div>
        Navbar
        <Link to="/">Homepage</Link>
        <Link to="/about">About</Link>
        {this.props.children}
      </div>
    );
  },
});

export {
  Navigation,
};
