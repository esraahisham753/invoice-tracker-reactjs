import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";

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

const SubmitButton = styled(Field)`
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

const ErrorLabel = styled.p`
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

    if (!values.email) {
      errors.email = "Email cannot by empty";
    }

    if (!values.password) {
      errors.password = "Cannot have a password";
    } else if (values.password.length < 8) {
      errors.password = "Password should have at least 8 characters";
    }
    return errors;
  }

  handleSubmit(values, actions) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        alert(JSON.stringify(values));
      }, 5000);
    });
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
            <SignInForm>
              <Label htmlFor="email">Email</Label>
              <EmailField
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email">
                {(error) => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label htmlFor="password"></Label>
              <PasswordField
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password">
                {(error) => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>
              <CheckboxContainer>
                <RememberMeCheckbox
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                />
                <CheckboxLabel>Remember me</CheckboxLabel>
              </CheckboxContainer>

              <SubmitButton type="submit" name="submit" id="submit" />
            </SignInForm>
          </Formik>
        </ContentContainer>
      </Container>
    );
  }
}

export default SignInComponent;
