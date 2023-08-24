import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage, ErrorMessage } from "formik";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 50px;
`;

const Title = styled.h1`
  white-space: pre-line;
`;

const SignInForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`;

const EmailField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const PasswordField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const CheckboxLabel = styled(Label)`
  margin-top: 7px;
  margin-left: 10px;
`;

const RememberMeCheckbox = styled(Field)`
  margin-top: 10px;
`;

const SubmitButton = styled.input`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #666666;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
`;

const ErrorLabel = styled(ErrorMessage)`
  font-size: 26px;
  color: red;
`;

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleValidation(values) {
    const errors = {};

    if (!this.state.email) {
      errors.email = "Email cannot by empty";
    }

    if (!this.state.password) {
      errors.password = "Cannot have a password";
    } else if (this.state.password.length < 8) {
      errors.password = "Password should have at least 8 characters";
    }
    return errors;
  }

  handleSubmit() {
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <Container>
        <ContentContainer>
          <Title>{"Sign In"}</Title>

          <Formik
            initialValues={{ email: "", password: "", rememberMe: false }}
            onSubmit={this.handleSubmit}
            validate={this.handleValidation}
          >
            {(props) => {
              <Form>
                <Label htmlFor="email">Email</Label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorLabel name="email" />

                <Label htmlFor="password"></Label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorLabel name="email" />
              </Form>;
            }}
          </Formik>

          <Form onSubmit={this.handleSubmit}>
            <Label>Email</Label>
            <EmailInput
              type="email"
              value={this.state.email}
              onChange={this.handleEmailInputChange}
            />

            {this.state.emailError && (
              <ErrorLabel>{this.state.emailError}</ErrorLabel>
            )}

            <Label>Password</Label>
            <PasswordInput
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordInputChange}
            />
            {this.state.passwordError && (
              <ErrorLabel>{this.state.passwordError}</ErrorLabel>
            )}
            <CheckboxContainer>
              <RememberMeCheckbox
                type="checkbox"
                checked={this.state.rememberMe}
                onChange={this.handleRememberMeInputChange}
              />
              <CheckboxLabel>Remember me</CheckboxLabel>
            </CheckboxContainer>

            <SubmitButton type="submit" />
          </Form>
        </ContentContainer>
      </Container>
    );
  }
}

export default SignInComponent;
