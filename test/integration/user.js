const UserStorage = artifacts.require('UserStorage')

contract('UserStorage', () => {
  
  it("can create user", async () => {
    const storage = await UserStorage.deployed()

    const username = web3.utils.fromAscii("bankole")
    const tx = await storage.createUser(username)

    assert.isOk(tx)
  })

// the test
  it ("can get users", async () => {
    const storage = await UserStorage.deployed()
    const userId = 1

    // get user info array

    const userInfo = await storage.getUserFromId.call(userId)

    // Get the second element (the username)

    const username = userInfo[1]

    assert.equal(username, web3.utils.fromAscii("bankole"))
  })

})