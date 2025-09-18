import React from 'react';
import classes from './AssetsTable.module.css';


const AssetsTable = (props) => {
    console.log('AssetsTable', props?.data, props?.initialInvestment);

    const getData = () => {
        return props?.data?.length > 0 ? props.data : [];
    }

    const formatterDec = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        }
    );

    return (
        <div>
            {getData()?.length > 0
                ? (
                    <table className={classes.result}>
                        <thead>
                        <tr>
                            <th>Year</th>
                            <th>Total Savings</th>
                            <th>Interest (Year)</th>
                            <th>Total Interest</th>
                            <th>Invested Capital</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            getData().map((item) => (
                                    <tr key={item.year}>
                                        <td>{item.year}</td>
                                        <td>{formatterDec.format(item.savingsEndOfYear)}</td>
                                        <td>{formatterDec.format(item.yearlyInterest)}</td>
                                        <td>{formatterDec.format(item.savingsEndOfYear - props.initialInvestment - item.yearlyContribution * item.year)}</td>
                                        <td>{props.initialInvestment + item.yearlyContribution * item.year}</td>
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                    </table>
                )
                : <p style={{textAlign: "center"}}>No Calculation Done</p>
            }
        </div>
    )
};

export default AssetsTable;

export const formatToDecimal = (number) => {
    if (isNaN(number)) {
        return -1;
    }
    return Number(number).toFixed(2);
}