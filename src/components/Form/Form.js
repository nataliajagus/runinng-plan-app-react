import React from "react";
import ValidationInfo from "components/ValidationInfo/ValidationInfo";
import styled from "styled-components";
import Button from "components/Button/Button";

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
  border: 1px solid #1F5AAC;
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;


const Form = props => {
  return (
    <StyledForm onSubmit={props.submitFn}>
      <h4>Running interval</h4>
      <OptionWrapper>
        <InputWrapper>
          <StyledInput
            type="number"
            name="runMinutes"
            placeholder="0"
            min="0"
            max="60"
          />
          <label htmlFor="runMinutes">
            minutes
          </label>
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type="number"
            name="runSeconds"
            placeholder="0"
            min="0"
            max="60"
          />
          <label htmlFor="runSeconds">
            seconds
          </label>
        </InputWrapper>
      </OptionWrapper>
      <h4>Walking interval</h4>
      <OptionWrapper>
        <InputWrapper>
          <StyledInput
            type="number"
            name="walkMinutes"
            placeholder="0"
            min="0"
            max="60"
          />
          <label htmlFor="walkMinutes">
            minutes
          </label>
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type="number"
            name="walkSeconds"
            placeholder="0"
            min="0"
            max="60"
          />
          <label htmlFor="walkSeconds">
            seconds
          </label>
        </InputWrapper>
      </OptionWrapper>

      <h4>Rounds</h4>
      <StyledInput
        type="number"
        name="rounds"
        placeholder="0"
      />

      {props.state.isValid === false && (
        <ValidationInfo warning>
          Please enter some data to create your exercise :)
        </ValidationInfo>
      )}

      {!props.state.isValid && (
        <Button htmlType="submit" submit>
          Create exercise
        </Button>
      )}
    </StyledForm>
  );
};

export default Form;
