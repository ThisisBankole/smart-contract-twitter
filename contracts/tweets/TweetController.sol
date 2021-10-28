// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../helper/BaseController.sol' ;
import '../ContractManager.sol';
import './TweetStorage.sol';


contract TweetController is BaseController {

function createNewTweet(uint _userId, string memory _text) public returns (uint) {
    ContractManager _manager = ContractManager(managerAddr);

        address _tweetStorageAddr = _manager.getAddress("TweetStorage");
        TweetStorage _tweetStorage = TweetStorage(_tweetStorageAddr);

        return _tweetStorage.createNewTweet(_userId, _text);
}

}
