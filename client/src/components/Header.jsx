import React from "react";
import { Link, withRouter } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { logOut } from "../redux/actions/userActions";

function Header(props) {
  const { user, logOut } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Doctor App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/doctors">
              Doctors <span className="sr-only">(current)</span>
            </Link>
          </li>

          {!user.currentUser ? (
            <li className="nav-item">
              <Link to="/signin-signup" className="nav-link">
                login
              </Link>
            </li>
          ) : (
            <li className="nav-item dropdown">
              <Link
                className="nav-link text-white dropdown-to dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hello {user.currentUser.name.toString().split(" ")[0]}
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
                {/* <Link className="dropdown-item" to="#">
                  Another action
                </Link> */}
                <div className="dropdown-divider"></div>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => logOut(props.history)}
                >
                  Log Out
                </Link>
              </div>
            </li>
          )}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({ user: state.user });
const mapActionsToProps = { logOut };
export default connect(mapStateToProps, mapActionsToProps)(withRouter(Header));
