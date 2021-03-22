import React, {Component, Fragment} from 'react';
import Tabel from './Tabel/Tabel';
import 'materialize-css/dist/css/materialize.min.css';
import axios from './axios-wallet';
import Header from './Header';
import Modal from './Modal/Modal';
import TransactionTable from './Tabel/TransactionTabel';

class App extends Component {

  state = {
    wallets: [],
    showModal: false,
    detailedTransations: null
  }

  componentWillMount() {
     axios.get('/wallet/all')
    .then(response => this.setState({wallets: response.data}))
    .catch(error => console.log(error));

   }

   detailWallet = i => {
    const {wallets} = this.state;

    const userLogin = wallets[i].user.login;

    axios.get(`/wallet/statement/${userLogin}`)
    .then(response => this.setState({showModal: true, detailedTransations: response.data}))
    .catch(error => console.log(error));

  }

  closeModal = () => {
    this.setState({showModal: false, detailedTransations: null})
  }
  
  render(){
    return (
      <Fragment>
        <Header />
        <div className="container">
          {
          this.state.detailedTransations &&
          <Modal show={this.state.showModal} closeModal={this.closeModal}>
              <TransactionTable transactions =  {this.state.detailedTransations}/>
          </Modal>
          }
          <Tabel wallets = {this.state.wallets} 
            detailWallet = {this.detailWallet} />
        </div>
      </Fragment>
      
    );
  }

}

export default App;
