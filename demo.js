const TruffleContract = artifacts.require('IERC20');
const MyContract = artifacts.require('MySmartContract');

module.exports = async function() {
  //Dont think this is correct. See how to instantiate a pointer to an alrady deployed contract
  const dai = await TruffleContract.at('0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa');
  const myContract = await MyContract.deployed();
  dai.approve(myContract.address,100);
}