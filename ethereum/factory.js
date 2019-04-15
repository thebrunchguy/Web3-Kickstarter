import web3 from './web3';
//getting instance, not library

//compiled contract inside build directory
//must give ABI!
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(CamaignFactory.interface),
  '0xbc7B7b466453E9fAaD52Ed96bD83fD96d2c6cD50'
);

export default instance; 
