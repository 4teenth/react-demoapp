import React from 'react';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';

const Layout = ({ children }) => (
  // <> or <React.Fragment>
  <>
    <AppBar />
    <Container>{children}</Container>
  </>
  // </> or </React.Fragment>
);

export default Layout;
