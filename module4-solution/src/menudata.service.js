(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;




  service.getAllCategories = function (){
    var categories = [];
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    }).then(function (response){

      var menuList = response.data;



      for (var i = 0; i < menuList.length ; i++)
      {
        var name = menuList[i];
        categories.push(name);
      }

      return categories;

    })
    .catch(function (errorResponse) {

      return errorResponse;
    });

  }

  service.getItemsForCategory = function (shortName) {
    var itemsInCategory = [];
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      params : {category: shortName}
    }).then(function (response){

      var items = response.data;



      for (var i = 0; i < items.menu_items.length ; i++)
      {
        var item = items.menu_items[i];

        itemsInCategory.push(item);

      }

      return itemsInCategory;


    })
    .catch(function (errorResponse) {

      return errorResponse;
    });


  }

}

})();
