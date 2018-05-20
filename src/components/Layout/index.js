import React, { Fragment } from 'react';

const Layout = ({ children }) => (
  <Fragment>
    <div className="navbar" />
    <div className="app-body">{children}</div>
  </Fragment>
);

export default Layout;
