import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import EmailField from "./EmailField";
import RatingField from "./RatingField";

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

const Label = styled.label`
  margin-top: 20px;
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

const CreateInvoiceForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

const EmailFieldInput = styled(EmailField)`
  height: 40px;
  font-size: 24px;
`;

const ProjectNameField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const BilledAmountField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const CreateInvoiceSchema = null;

class CreateInvoiceComponent extends React.Component {
  handleSubmit() {}

  render() {
    return (
      <Container>
        <ContentContainer>
          <Title>{"Create Invoice"}</Title>
          <Formik
            initialValues={{
              email: "",
              projectName: "",
              billedAmount: "",
              rating: 0,
            }}
            onSubmit={this.handleSubmit}
            validationSchema={CreateInvoiceComponent}
          >
            {
                props => (
                    <CreateInvoiceForm>
                        <EmailFieldInput name="email" type="email" label="client's email"/>

                        <Label>Project Name</Label>
                        <ProjectNameField name="projectName" type="text"/>
                        <ErrorMessage name="projectName">
                            {
                                error => <ErrorLabel>{error}</ErrorLabel>
                            }
                        </ErrorMessage>
                        
                        <Label>Billed Amount</Label>
                        <BilledAmountField name="billedAmount" type="number"/>
                        <ErrorMessage name="billedAmount">
                            {
                                error => <ErrorLabel>{error}</ErrorLabel>
                            }
                        </ErrorMessage>

                        <RatingField name="rating"  label={"Project Rating"}/>
                        <SubmitButton type=""></SubmitButton>
                    </CreateInvoiceForm>
                )
            }
          </Formik>
        </ContentContainer>
      </Container>
    );
  }
}
