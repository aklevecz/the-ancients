//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RaptorExchange {
    ERC20 public RATInterface;

    mapping (address => uint) public stakers;
    mapping (address => bytes32) public names;

    constructor(address _RATAddress) {
        RATInterface = ERC20(_RATAddress);
    }

    function stake(uint _amount, bytes32 _name) public {
        RATInterface.transferFrom(msg.sender, address(this), _amount);
        stakers[msg.sender] += _amount;
        names[msg.sender] = _name;
    }

    function withdrawStake(uint _amount) public {
        RATInterface.approve(address(this), _amount);
        RATInterface.transferFrom(address(this), msg.sender, _amount);
        stakers[msg.sender] -= _amount;
    }
}