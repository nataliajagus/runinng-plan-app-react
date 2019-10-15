import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from 'components/Form/Form.module.css';
import Button from 'components/Button/Button';


const StyledForm = styled.form`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

class Form extends Component {

    state = {
        runMinutes: 0,
        runSeconds: 0,
        walkMinutes: 0,
        walkSeconds: 0,
        rounds: 0
      }

    createExercise = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        this.setState({ runMinutes: e.target[0].value, runSeconds: e.target[1].value, walkMinutes: e.target[2].value, walkSeconds: e.target[3].value, rounds: e.target[4].value });
      }

    render() {
        return (
            <StyledForm onSubmit={this.createExercise}>
                <h4 className={styles.formHeading}>Running interval</h4>
                <div className={styles.optionWrapper}>
                    <div className={styles.inputWrapper}>
                        <input type="number" name="runMinutes" placeholder="0" className={styles.formInput} />
                        <label htmlFor="runMinutes" className={styles.formLabel}>minutes</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="number" name="runSeconds" placeholder="0" className={styles.formInput} />
                        <label htmlFor="runSeconds" className={styles.formLabel}>seconds</label>
                    </div>
                </div>
                <h4 className={styles.formHeading}>Walking interval</h4>
                <div className={styles.optionWrapper}>
                    <div className={styles.inputWrapper}>
                        <input type="number" name="walkMinutes" placeholder="0" className={styles.formInput} />
                        <label htmlFor="walkMinutes" className={styles.formLabel}>minutes</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="number" name="walkSeconds" placeholder="0" className={styles.formInput} />
                        <label htmlFor="walkSeconds" className={styles.formLabel}>seconds</label>
                    </div>
                </div>
                
                <h4 className={styles.formHeading}>Rounds</h4>
                <input type="number" name="rounds" placeholder="0"  className={styles.formInput} />
                <Link to={{ pathname: '/exercise', state: { run: ((this.state.runMinutes * 60) + this.state.runSeconds) * 1000, walk: ((this.state.walkMinutes * 60) + this.state.walkSeconds) * 1000, rounds: this.state.rounds, week: 0 } }}><Button htmlType="submit" submit>Create exercise</Button></Link>
            </StyledForm>
        )
    }
}

export default Form;
