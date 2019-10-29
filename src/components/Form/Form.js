import React from "react";
import ValidationInfo from "components/ValidationInfo/ValidationInfo";
import styled from "styled-components";
import styles from "components/Form/Form.module.css";
import Button from "components/Button/Button";

const StyledForm = styled.form`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Form = props => {
  return (
    <StyledForm onSubmit={props.submitFn}>
      <h4 className={styles.formHeading}>Running interval</h4>
      <div className={styles.optionWrapper}>
        <div className={styles.inputWrapper}>
          <input
            type="number"
            name="runMinutes"
            placeholder="0"
            min="0"
            max="60"
            className={styles.formInput}
          />
          <label htmlFor="runMinutes" className={styles.formLabel}>
            minutes
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="number"
            name="runSeconds"
            placeholder="0"
            min="0"
            max="60"
            className={styles.formInput}
          />
          <label htmlFor="runSeconds" className={styles.formLabel}>
            seconds
          </label>
        </div>
      </div>
      <h4 className={styles.formHeading}>Walking interval</h4>
      <div className={styles.optionWrapper}>
        <div className={styles.inputWrapper}>
          <input
            type="number"
            name="walkMinutes"
            placeholder="0"
            min="0"
            max="60"
            className={styles.formInput}
          />
          <label htmlFor="walkMinutes" className={styles.formLabel}>
            minutes
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="number"
            name="walkSeconds"
            placeholder="0"
            min="0"
            max="60"
            className={styles.formInput}
          />
          <label htmlFor="walkSeconds" className={styles.formLabel}>
            seconds
          </label>
        </div>
      </div>

      <h4 className={styles.formHeading}>Rounds</h4>
      <input
        type="number"
        name="rounds"
        placeholder="0"
        className={styles.formInput}
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
