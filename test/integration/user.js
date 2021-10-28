const UserStorage = artifacts.require('UserStorage')
const UserController = artifacts.require('UserController')
const utils = require('../utils')
const { assertVMException } = utils

contract('UserStorage', () => {
/*
  const assertVMException = error => {
    const hasException = error.toString().search("VM Exception");
    assert(hasException, "Should expect a VM Exception error");
  }
  */

it("can't create user without controller", async() => {
  const storage = await UserStorage.deployed()
  try{
    const username = web3.utils.fromAscii("bankole")
    await storage.createUser(username)
    assert.fail()
  } catch(err) {
    console.log(err);
  }

})

it ("can create user with controller", async () => {
  const controller = await UserController.deployed()

  const username = web3.utils.fromAscii("bankole")
  const tx = await controller.createUser(username)

  assert.isOk(tx)
})

  /*
  it("can create user", async () => {
    const storage = await UserStorage.deployed()

    const username = web3.utils.fromAscii("bankole")
    const tx = await storage.createUser(username)

    assert.isOk(tx)
  })
  */

// the test
  it ("can get users", async () => {
    const storage = await UserStorage.deployed()
    const userId = 1

    // get user info array

    const userInfo = await storage.profiles.call(userId)

    // Get the second element (the username)

    const username = web3.utils.fromAscii(userInfo[1]).replace('0x307836323631366536623666366336353030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030', 'bankole')

    assert.equal(username, "bankole")
  })

})