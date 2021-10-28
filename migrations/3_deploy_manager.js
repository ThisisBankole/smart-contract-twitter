const ContractManager = artifacts.require('ContractManager')
const TweetStorage = artifacts.require('TweetStorage')
const UserStorage = artifacts.require('UserStorage')

module.exports = (deployer) => {

    deployer.deploy(ContractManager)
    .then(()=> {
        return ContractManager.deployed ()

    })

    .then(manager =>{
        return Promise.all([
            manager.setAddress("UserStorage", UserStorage.address),
            manager.setAddress("TweetStorage", TweetStorage.address),
        ])
    })
}