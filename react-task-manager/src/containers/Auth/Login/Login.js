import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./Login.css";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import * as actions from "../../../store/actions/index";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email..."
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Your password..."
        },
        value: "",
        validation: {
          required: true,
          minLength: 8
        },
        valid: false,
        touched: false
      }
    }
  };

  onInputChangeHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  };

  submitHandler = event => {
    event.preventDefault();
    const email = this.state.controls.email.value;
    const password = this.state.controls.password.value;
    this.props.onSubmitHandler(email, password);
  };

  render() {
    let redirect = null;
    if (this.props.isAuthenticated) {
      redirect = <Redirect to="/tasks" />;
    }

    const formElementArray = [];
    for (let key in this.state.controls) {
      formElementArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    const form = formElementArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        changed={event => this.onInputChangeHandler(event, formElement.id)}
      />
    ));

    let error = null;
    if (this.props.error) {
      error = <p style={{ color: "red" }}>{this.props.error.error}</p>;
    }

    return (
      <div className="Auth">
        {redirect}
        {error}
        <form action="" onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">SIGN IN</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    isAuthenticated: state.auth.tokenId !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitHandler: (email, password) =>
      dispatch(actions.signIn(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
