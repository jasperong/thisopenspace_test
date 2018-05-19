import React, { Fragment } from 'react';

import './index.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="navbar" />
      <div className="body">{children}</div>
    </Fragment>
  );
};

export default Layout;
