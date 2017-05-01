(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);



function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'narrowDownController',
    bindToController: true

  };

  return ddo;
}


function FoundItemsDirectiveController() {

  var list = this;

  list.checkListEmpty = function () {

      if (list.found.length == 0){
        return true;
      }
      else {
        return false
      }

  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var menu = this;
  menu.found = [];

  menu.findMatchedItems = function (){
    var searchTerm = menu.searchTerm;
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);


    promise.then(function (response) {
        menu.found = response;
    })
    .catch(function (error) {
      console.log(error);
    })

  }

  menu.removeItem = function(index){
    menu.found.splice(index,1);
  }

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {

  var service = this;


  service.getMatchedMenuItems = function (searchTerm) {


    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response){

      var menuList = response.data["menu_items"];

      var foundList = [];

      for (var i = 0; i < menuList.length ; i++)
      {

        var description = menuList[i]["description"];

        if (description.toLowerCase().indexOf(searchTerm) != -1) {
          foundList.push(menuList[i]);
        }

      }

      return foundList;

    })
    .catch(function (errorResponse) {

      return errorResponse;
    });


  };

}

})();
