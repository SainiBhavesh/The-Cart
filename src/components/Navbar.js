import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            The Cart
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
