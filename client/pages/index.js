import React from 'react'
import { eth } from "../web3/provider";
import UserStorage from "../web3/artifacts/UserStorage.json"

export default class IndexPage extends React.Component {

  async componentDidMount() {
    try {
      await ethereum.request({ method: 'eth_requestAccounts' }) // Prompt user to let our DApp access their addresses
      const addresses = await eth.getAccounts() // Get user's ETH addresses
      console.log(addresses)
       // Get Balance
      const balance = await eth.getBalance(addresses[0])
      console.log(balance)
    } catch (err) {
      console.error("User denied access to their ETH addresses!")
    }
    console.log(UserStorage)

  }


  render() {
    return (
      <h1>hello world!</h1>
    )
  }
}