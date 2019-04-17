import Web3 from 'web3';

//instance of web 3
//capital for constructor, not for instance
let web3;
//let means will reassign

//type of sees if defined
if (typeof window != 'undefined' && typeof window.web3 != 'undefined') {
  //we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);

}else{
  //we are on server or user is not running metamask
  //set up own network that uses infura
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
  );
  web3 = new Web3(provider);
}

export default web3;

// by making a facotry file, you can easily give access to an already deployed version of that factory in other parts of proj
