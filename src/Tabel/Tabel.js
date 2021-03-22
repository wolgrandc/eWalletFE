import React, { Component } from 'react';

const WalletTableHead = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>User</th>
                <th className="hide-on-small-only" >Email</th>
                <th>Balance</th>
                <th>Detail</th>
            </tr>
        </thead>
    );
};

const WalletTableBody = props => {

    const linhas = props.wallets.map((wallet, index) => {
        return(
            <tr key={index} >
                <td>{wallet.user.name}</td>
                <td>{wallet.user.login}</td>
                <td className="hide-on-small-only" >{wallet.user.email}</td>
                <td>{wallet.value}</td>
                <td><button
                className="btn waves-effect waves-light blue lighten-2"
                onClick={() => props.detailWallet(index)}
                >Detail</button>
                </td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
};

class Table extends Component {
    render() {
        const {wallets, detailWallet} = this.props;
        return (
            <table className="centered highlight" >
                <WalletTableHead />
                <WalletTableBody 
                    wallets = {wallets}
                    detailWallet = {detailWallet}
                />
            </table>
        );
    }
}

export default Table;