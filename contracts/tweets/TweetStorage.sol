// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import '../helper/BaseStorage.sol';

contract TweetStorage is BaseStorage {

    mapping (uint => Tweet) public tweets;


    struct Tweet {
        uint id;
        string text;
        uint userId;
        uint postedAt;
    }

    // create new tweet

    uint latestTweetId = 0;

    function createNewTweet (uint _userId, string memory _text) public onlyController returns (uint) {
        latestTweetId++;

        tweets[latestTweetId] = Tweet(latestTweetId, _text, _userId, block.timestamp);

        return latestTweetId;


    }
}