'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//instance of web 3
//capital for constructor, not for instance
var web3 = void 0;
//let means will reassign

//type of sees if defined
if (typeof window != 'undefined' && typeof window.web3 != 'undefined') {
  //we are in the browser and metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //we are on server or user is not running metamask
  //set up own network that uses infura
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q');
  web3 = new _web2.default(provider);
}

exports.default = web3;

// by making a facotry file, you can easily give access to an already deployed version of that factory in other parts of proj
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxZQUFKO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLE9BQU8sQUFBUCxVQUFpQixBQUFqQixlQUFnQyxPQUFPLE9BQU8sQUFBZCxRQUFzQixBQUExRCxhQUF1RSxBQUNyRTtBQUNBO1NBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFFRDtBQUpELE9BSUssQUFDSDtBQUNBO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDZixBQURlLEFBQWpCLEFBR0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0Q7QUFFRDs7a0JBQWUsQUFBZjs7QUFFQSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYXZpZC5rb2Jyb3NreS9EZXNrdG9wL1Byb2ova2ljayJ9