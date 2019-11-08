import React from "react";
import styled from "styled-components";
import Button from "components/Button/Button";
import { Formik } from "formik";
import * as Yup from 'yup';
import ValidationInfo from "components/ValidationInfo/ValidationInfo";

const StyledForm = styled.form`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  border: 1px solid #1f5aac;
  font-size: 30px;
  font-weight: 900;

  ::placeholder,
  ::-webkit-input-placegholder {
    font-size: 20px;
    line-height: 80px;
    font-weight: 300;
    text-align: center;
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

Yup.addMethod(Yup.mixed, 'oneOfRequired', function() {
  return this.test(
    'oneOfRequired',
    'One of intervals must be entered',
    function() {
      return (this.parent.runMinutes || this.parent.runSeconds || this.parent.walkMinutes || this.parent.walkSeconds)
    }
  );
});

const exerciseSchema = Yup.object().shape({
  runMinutes: Yup.number().oneOfRequired(),
  runSeconds: Yup.number().oneOfRequired(),
  walkMinutes: Yup.number().oneOfRequired(),
  walkSeconds: Yup.number().oneOfRequired(),
  rounds: Yup
  .number()
  .min(1)
  .required()
})

const Form = ({ submitFn, submitted }) => {
  return (
    <>
      <Formik
        initialValues={{
          runMinutes: '',
          runSeconds: '',
          walkMinutes: '',
          walkSeconds: '',
          rounds: ''
        }}
        validationSchema={exerciseSchema}
        onSubmit={submitFn}
        render={({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <h4>Running interval</h4>
            <OptionWrapper>
              <StyledLabel>
                <StyledInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.runMinutes}
                  type="number"
                  name="runMinutes"
                  placeholder="0"
                />
                minutes
              </StyledLabel>
              <StyledLabel>
                <StyledInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.runSeconds}
                  type="number"
                  name="runSeconds"
                  placeholder="0"
                />
                seconds
              </StyledLabel>
            </OptionWrapper>
            <h4>Walking interval</h4>
            <OptionWrapper>
              <StyledLabel>
                <StyledInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.walkMinutes}
                  type="number"
                  name="walkMinutes"
                  placeholder="0"
                />
                minutes
              </StyledLabel>
              <StyledLabel>
                <StyledInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.walkSeconds}
                  type="number"
                  name="walkSeconds"
                  placeholder="0"
                />
                seconds
              </StyledLabel>
            </OptionWrapper>
            <h4>Rounds</h4>
            <StyledInput
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.rounds}
              type="number"
              name="rounds"
              placeholder="0"
            />
            {touched.runMinutes && errors.runMinutes && <ValidationInfo warning>Add some data to create the exercise :)</ValidationInfo>}
            {touched.rounds && errors.rounds && <ValidationInfo warning>Your exercise should have at least one round</ValidationInfo>}
            <Button type="submit" submit invisible={submitted}>
              Create exercise
            </Button>
          </StyledForm>
        )}
      />
    </>
  );
};

export default Form;
