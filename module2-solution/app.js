(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {

  var alreadyBoughtList = this;

  alreadyBoughtList.everythingBoughtMsg = "";

  alreadyBoughtList.Items = ShoppingListCheckOffService.getBoughtList();

  if (alreadyBoughtList.Items.length == ShoppingListCheckOffService.getToBuyItemsCount()){

    alreadyBoughtList.everythingBoughtMsg = "Everything is bought";

  }

}


ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {

  var toBuyList = this;

  toBuyList.allBoughtMessage = "Nothing is bought yet"
  // toBuyList.buyingDone = ""

  toBuyList.Items = ShoppingListCheckOffService.getToBuyList();

  toBuyList.buyItem = function (index){

    ShoppingListCheckOffService.moveItem(index);

    var count = ShoppingListCheckOffService.getToBuyItemsCount();


    if (toBuyList.Items.length == 0){
        toBuyList.buyingDone = "Everything is bought"
    }
    
    else if (toBuyList.Items.length < ShoppingListCheckOffService.getToBuyItemsCount()){
      toBuyList.allBoughtMessage = ""
    }

  }

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyList = [
    {
      name: "Cashews",
      quantity: "200"
    },
    {
      name: "Green Tea",
      quantity: "5"
    },
    {
      name: "Almonds",
      quantity: "300"
    },
    {
      name: "Apples",
      quantity: "5"
    },
    {
      name: "Oranges",
      quantity: "7"
    }
  ];

  service.toBuyItemsCount = toBuyList.length

  var boughtList = []

  service.getToBuyItemsCount = function(){
    return service.toBuyItemsCount
  }

  service.moveItem = function (index) {

       var item = toBuyList[index];
       toBuyList.splice(index,1);
       boughtList.push(item);

   };

   service.getBoughtList = function () {
     return boughtList;
   };

  service.getToBuyList = function () {
    return toBuyList;
  };
}

})();
