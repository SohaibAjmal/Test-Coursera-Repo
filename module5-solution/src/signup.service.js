(function () {
"use strict";

angular.module('restaurant')
.service('GetMenuService', GetMenuService);


GetMenuService.$inject = ['$http'];
function GetMenuService($http) {

  var service = this;

  service.userInfo = {}


  service.saveUserInfo = function (userInfo) {

    var shortName = userInfo.shortName;

    var menuUrl = "https://sohaibdev.herokuapp.com/menu_items/" + shortName + ".json"


    return $http({
      method: "GET",
      url: menuUrl
    }).then(function (response){

      service.userInfo["firstName"] = userInfo.firstName;
      service.userInfo["lastName"] = userInfo.lastName;
      service.userInfo["email"] = userInfo.email;
      service.userInfo["phone"] = userInfo.phone;
      service.userInfo["shortName"] = shortName;

      service.userInfo["name"] = response.data["name"];
      service.userInfo["description"] = response.data["description"];
      service.userInfo["price_small"] = response.data["price_small"];
      service.userInfo["price_large"] = response.data["price_large"];
      service.userInfo["small_portion_name"] = response.data["small_portion_name"];
      service.userInfo["large_portion_name"] = response.data["large_portion_name"];


      return "Your information has been saved";

    })
    .catch(function (errorResponse) {

      return errorResponse;
    });

  };


  service.getUserInfo = function () {

    return service.userInfo;

  }


}



})();
