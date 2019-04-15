import Web3 from 'web3';

//instance of web 3
//capital for constructor, not for instance
const web3 = new Web3(window.web3.currentProvider);

export default web3;

// by making a facotry file, you can easily give access to an already deployed version of that factory in other parts of proj
