// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Owned {

  
    address public ownerAddr;

    // getting and setting the address that's deploying the contract for the very first time.

    constructor() {
        ownerAddr = msg.sender;
    }


  //modifier for msg.sender 

    modifier onlyOwner() {
        require(msg.sender == ownerAddr);
        _;
    }

    // allowance for transferring ownership in the future
// this can only be done by the original owner 
// making sure the new address isn't empty 

function transferOwnership (address _newOwner) public onlyOwner  {
    // Only the current owner can set a new ownerAddr:
    
    // require (msg.sender == ownerAddr);

    // newOwner cannot be null

    require(_newOwner != address(0));

    ownerAddr = _newOwner;

}

}