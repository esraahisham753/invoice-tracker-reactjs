import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

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

const SignUpForm = styled(Form)`
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

class SignUpComponent extends React.Component {
  handleSubmit(values, actions) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        alert(JSON.stringify(values));
      }, 5000);
    });
  }

  handleValidation(values) {
    let errors = {};
    if (!values.email) {
      errors.email = "Email field cannot be empty";
    }
    return errors;
  }

  validatePassword(value) {
    if (!value) {
      return "Password Field cannot be empty";
    } else if (value.length < 5) {
      return "very weak";
    } else if (value.length < 8) {
      return "Weak";
    }

    return undefined;
  }

  validateConfirmPassword(value, pass) {
    if (!value) {
      return "Password Field cannot be empty";
    } else if (value !== pass) {
      return "Passwords don't match";
    } else if (value.length < 5) {
      return "very weak";
    } else if (value.length < 8) {
      return "Weak";
    }

    return undefined;
  }

  render() {
    return (
      <Container>
        <ContentContainer>
          <Title>{"Sign up"}</Title>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={this.handleSubmit}
            validate={this.handleValidation}
          >
            {(props) => {
              return (
                <SignUpForm>
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
                    validate={this.validatePassword}
                    placeholder="Enter your password"
                  />
                  <ErrorMessage name="password">
                    {(error) => <ErrorLabel>{error}</ErrorLabel>}
                  </ErrorMessage>
                  <Label htmlFor="confirmPassword"></Label>
                  <PasswordField
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    validate={this.validatePassword}
                    placeholder="Confirm your password"
                  />
                  <ErrorMessage name="confirmPassword">
                    {(error) => <ErrorLabel>{error}</ErrorLabel>}
                  </ErrorMessage>

                  <SubmitButton
                    type="submit"
                    name="submit"
                    disable={props.isSubmitting}
                  />
                </SignUpForm>
              );
            }}
          </Formik>
        </ContentContainer>
      </Container>
    );
  }
}

export default SignUpComponent;
