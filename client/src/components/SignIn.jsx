import React, { Component } from "react";
import { Link } from "react-router-dom";
//commons
import { Button, TextInput } from "../common";

//redux
import { login } from "../redux/actions/userActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) return alert("All Fields Required");
    this.setState({ loading: true });
    const { user, login } = this.props;
    login({ email, password }, this.props.history);
  };

  handleChane = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const {
      user: { errors },
    } = this.props;
    return (
      <div className="signup-form" style={{ marginTop: "2rem" }}>
        <div style={{ position: "relative" }}>
          <div>
            <h1>Sign In</h1>
          </div>
          <Link
            to="/signin-signup/signup"
            className="btn btn-info"
            style={{ position: "absolute", right: "0", top: "0" }}
          >
            Sign Up
          </Link>
        </div>
        <hr />
        {errors && errors.length ? (
          <div
            className={`alert ${
              errors.length ? "alert-danger" : "alert-success"
            }`}
          >
            {(errors.length && <>Wrong Credentials</>) || <>Signed In</>}
          </div>
        ) : null}
        <form method="POST" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <TextInput
              name="email"
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChane}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <TextInput
              name="password"
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleChane}
            />
          </div>

          <div className="form-group">
            <Button
              className={`form-control btn ${
                this.props.user.loadingUser ? "" : "btn-primary"
              } `}
            >
              {this.props.user.loadingUser ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <>Sign In</>
              )}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user });
const mapActionsToProps = { login };

export default connect(mapStateToProps, mapActionsToProps)(withRouter(SignIn));
