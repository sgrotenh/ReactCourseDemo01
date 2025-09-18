import React from "react";
import AssetForm from "./AssetForm";
import AssetsTable from "./AssetsTable";
import '../../index.css';
import AssetsHeader from "./AssetsHeader";


const Assets = (props) => {
    const [userInput, setUserInput] = React.useState();

    const calculateHandler = (userInput) => {
        console.log('calculateHandler');
        setUserInput(userInput);
    };

    const resultData = calculate(userInput);
    const initialInvestment = userInput ? +userInput?.currentSavings : 0;

    return (
        <div>
            <AssetsHeader/>
            <AssetForm onCalculate={calculateHandler}/>
            <AssetsTable data={resultData} initialInvestment={initialInvestment}/>
        </div>
    );
};

export default Assets;


const calculate = (userInput) => {
    const results = [];
    if (userInput) {
        let currentSavings = userInput.currentSavings;
        const yearlyContribution = userInput.yearlyContribution;
        const expectedReturn = userInput.expectedReturn / 100;
        const duration = userInput.duration;

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            results.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }
    }
    return results
}