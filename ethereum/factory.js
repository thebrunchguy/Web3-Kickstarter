import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  //not sure if this is the right address but works for now because it defines
  //the campaign factory
  '0xbc7B7b466453E9fAaD52Ed96bD83fD96d2c6cD50'
);

export default instance;

//0xbc7B7b466453E9fAaD52Ed96bD83fD96d2c6cD50
