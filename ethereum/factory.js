import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x04e7789e6269ECA0cACF9297BaACF8c0809f6756'
);

export default instance;

//0xbc7B7b466453E9fAaD52Ed96bD83fD96d2c6cD50
