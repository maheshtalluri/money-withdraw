// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {changeMoney: 2000}

  onChangeMoney = value => {
    this.setState(prevMoney => ({changeMoney: prevMoney.changeMoney - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {changeMoney} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <p className="profile">S</p>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div>
              <p className="money">{changeMoney}</p>
              <p className="rupee">in rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="value-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                eachItem={eachItem}
                onChangeMoney={this.onChangeMoney}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
