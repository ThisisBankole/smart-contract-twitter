const TweetStorage = artifacts.require('TweetStorage')

contract ( 'tweets',() => {


    before(async () => {
        const storage = await TweetStorage.deployed()
        storage.createNewTweet(1, "Hello world!")
      })




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