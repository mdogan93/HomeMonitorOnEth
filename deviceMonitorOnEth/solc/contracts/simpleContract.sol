pragma solidity ^0.4.20;

contract simpleContract{
    uint x;
    
    function setData(uint _x) public {
        x = _x;
    }
    
    function getData() public view returns(uint){
        return x;
    }
}