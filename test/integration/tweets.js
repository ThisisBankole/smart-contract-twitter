const TweetStorage = artifacts.require('TweetStorage')
const TweetController = artifacts.require('TweetController')
const utils = require('../utils')
const { assertVMException } = utils

contract ( 'tweets',() => {

    it("can't create tweet without controller", async () => {
        const storage = await TweetStorage.deployed()
    
        try {
          const tx = await storage.createTweet(1, "tristan")
          assert.fail();
        } catch (err) {
          assertVMException(err);
        }
      })

      it("can create tweet with controller", async () => {
        const controller = await TweetController.deployed()
    
        const tx = await controller.createNewTweet(1, "Hello world!")
    
        assert.isOk(tx)
      })

/*
    before(async () => {
        const storage = await TweetStorage.deployed()
        storage.createNewTweet(1, "Hello world!")
      })
*/



    it ("can get tweets", async () => {
        const storage = await TweetStorage.deployed()

        const tweet = await storage.tweets.call(1) // Get the data
        const { id, text, userId } = tweet // Destructure the data

            // Check if the different parts contain the expected values:
    assert.equal(parseInt(id), 1)
    assert.equal(text, "Hello world!")
    assert.equal(parseInt(userId), 1)

    })

})