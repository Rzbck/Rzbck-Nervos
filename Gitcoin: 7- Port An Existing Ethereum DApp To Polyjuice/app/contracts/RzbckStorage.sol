pragma solidity >=0.8.0;

contract RzbckStorage {
  uint storedData;

  constructor() payable {
    storedData = 666;
  }

  function set(uint x) public payable {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}