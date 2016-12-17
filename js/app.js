(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)


// ToBuyController
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ToBuyList = this;  
  
  //Obtenemos todos los elementos
  ToBuyList.items = ShoppingListCheckOffService.getItems();  

  //Compramos elemento
  ToBuyList.BuyItem = function(itemIndex){    
    ShoppingListCheckOffService.BuyItem(itemIndex);
  }  
}

// AlreadyBoughtController
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var BoughtList = this;  
  
  //Obtenemos todos los elementos
  BoughtList.items = ShoppingListCheckOffService.getBoughtItems();  

}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var to_buy_items = [{name: "Beer",quantity: "15"},{name: "Gin",quantity: "1"},{name: "Bread",quantity: "3"},{name: "Milk",quantity: "2"},{name: "Donuts",quantity: "200"},{name: "Cookies",quantity: "300"},{name: "Chocolate",quantity: "5"}];  
  var bought_items = [];

  service.BuyItem = function (itemIndex) {    
    var item = to_buy_items[itemIndex];
    bought_items.push(item);
    to_buy_items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return to_buy_items;
  };
  service.getBoughtItems = function () {
    return bought_items;
  };  
    
}

})();
