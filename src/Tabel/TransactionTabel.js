import React, { Component } from 'react';

const TransactionTableHead = () => {
    return (
        <thead>
            <tr>
                <th>Operation</th>
                <th className="hide-on-small-only" >Target</th>
                <th>Value</th>
                <th>Date</th>
            </tr>
        </thead>
    );
};

const TransactionTableBody = props => {

    const linhas = props.transactions.map((transaction, index) => {
        return(
            <tr key={index}  >
                <td>{transaction.type}</td>
                <td className="hide-on-small-only" >{transaction.target ? transaction.target.login : "-" }</td>
                <td style={{color: transaction.direction ? "green" : "red"}} >{transaction.direction ? "+" : "-"}{transaction.value}</td>
                <td>{transaction.date}</td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
};

class TransactionTable extends Component {
    render() {
        const {transactions} = this.props;
        return (
            <React.Fragment>
            {
                transactions.length > 0 && 

            <table className="centered highlight" >
                <TransactionTableHead />
                <TransactionTableBody 
                    transactions = {transactions}
                />
            </table>
            }
            {
                transactions.length == 0 && 

            <h5>
                There is no transactions to this user.
            </h5>
            }
            </React.Fragment>
        );
    }
}

export default TransactionTable;