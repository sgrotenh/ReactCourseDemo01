import React from "react";
import classes from './AssetForm.module.css';

const INITIAL_VALUES = {
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10,
};

const AssetForm = (props) => {
    const [userInput, setUserInput] = React.useState(INITIAL_VALUES);

    const inputHandler = (event) => {
        console.log('inputHandler');
        const inputId = event.target.id;
        const inputValue = event.target.value;

        setUserInput((prev) => {
            return {
                currentSavings: inputId === 'current-savings' ? +inputValue : prev.currentSavings,
                yearlyContribution: inputId === 'yearly-contribution' ? +inputValue : prev.yearlyContribution,
                expectedReturn: inputId === 'expected-return' ? +inputValue : prev.expectedReturn,
                duration: inputId === 'duration' ? inputValue : prev.duration,
            }
        });
    };

    const submitHandler = (event) => {
        console.log('submitHandler');
        event.preventDefault();
        props.onCalculate(userInput);
    };

    const resetHandler = () => {
        console.log('resetHandler');
        resetForm();
        props.onCalculate({});
    };

    const resetForm = (event) => {
        setUserInput(INITIAL_VALUES);
    }

    return (
        <div>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes['input-group']}>
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input type="number" id="current-savings" value={userInput.currentSavings}
                               onChange={inputHandler}/>
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input type="number" id="yearly-contribution" value={userInput.yearlyContribution}
                               onChange={inputHandler}/>
                    </p>
                </div>
                <div className={classes['input-group']}>
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input type="number" id="expected-return" value={userInput.expectedReturn}
                               onChange={inputHandler}/>
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input type="number" id="duration" value={userInput.duration} onChange={inputHandler}/>
                    </p>
                </div>
                <p className={classes.actions}>
                    <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>Reset</button>
                    <button type="submit" className={classes.button}>Calculate</button>
                </p>
            </form>
        </div>
    )
};

export default AssetForm;