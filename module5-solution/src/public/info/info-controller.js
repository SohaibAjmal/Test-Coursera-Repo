(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['userInfo','GetMenuService'];
function InfoController(userInfo, GetMenuService) {

  var info = this;

  info.userInfo = {}

  if (!angular.equals({},userInfo))
  {
    info.userInfo["firstName"] = userInfo["firstName"];
    info.userInfo["lastName"]  = userInfo["lastName"];
    info.userInfo["email"]  = userInfo["email"];
    info.userInfo.phone = userInfo["phone"];

    var shortName = userInfo["shortName"];
    var shortName = shortName.replace(/[0-9]/g, '');
    info.userInfo.shortName = shortName;


    info.userInfo.name = userInfo["name"];
    info.userInfo.description = userInfo["description"];
    info.userInfo.price_small = userInfo["price_small"];
    info.userInfo.price_large = userInfo["price_large"];
    info.userInfo.small_portion_name = userInfo["small_portion_name"];
    info.userInfo.large_portion_name = userInfo["large_portion_name"];
 }
 else {
   info.userInfo = false;
 }



}


})();
