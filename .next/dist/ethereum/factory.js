'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface),
//not sure if this is the right address but works for now because it defines
//the campaign factory
'0xbc7B7b466453E9fAaD52Ed96bD83fD96d2c6cD50');

exports.default = instance;

//0xbc7B7b466453E9fAaD52Ed96bD83fD96d2c6cD50
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLEtBQUssQUFBTCxNQUFXLDBCQUFnQixBQUEzQixBQURlO0FBRWY7QUFDQTtBQUNBLEFBSmUsQUFBakIsQUFPQTs7a0JBQWUsQUFBZjs7QUFFQSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYXZpZC5rb2Jyb3NreS9EZXNrdG9wL1Byb2ova2ljayJ9