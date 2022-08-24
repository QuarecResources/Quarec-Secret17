import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import FooterDark from "../../components/Footer/footerDark";

const path = window.location.pathname;

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    // {...rest}

    render={(props) => {
      return (
        <React.Fragment>
          <Header />

          <Component {...props} />
          {path === "/blogs" ? <FooterDark /> : <Footer />}
        </React.Fragment>
      );
    }}
  />
);

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
};

export default Authmiddleware;
