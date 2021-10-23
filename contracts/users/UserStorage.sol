// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserStorage {

    // mapping id to Profile so I can retrieve users profile based on ID

    mapping (uint => Profile) profiles;

    // the structure of the profile 

    struct Profile {
        uint id;
        bytes32 userName;
    }


    // create new user. 

    uint latestUserId = 0;
  
    function createUser(bytes32 _username) public returns(uint) {
    latestUserId++;  

    profiles[latestUserId] = Profile(latestUserId, _username);

    return latestUserId;
  }

// retrieving users function
  function getUserFromId (uint _userId) view public returns (uint, bytes32) {
    return (
      profiles[_userId].id,
      profiles[_userId].userName

    );
  }


}