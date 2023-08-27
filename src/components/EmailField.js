import styled from "styled-components";
import { useField } from "formik";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`;

const Label = styled.label``;

const InputField = styled.input`
  height: 40px;
  font-size: 24px;
`;

const ErrorMessage = styled.div`
  font-size: 26px;
  color: red;
`;

const EmailField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Container>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <InputField {...field} {...props} />
      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </Container>
  );
};

export default EmailField;
