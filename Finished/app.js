(function () {
'use strict'

angular.module('LunchApp', [])

.controller('LunchController', LunchController);


  function LunchController($scope, $injector)
  {
      $scope.lunchItems = "";
      $scope.lunchCountResult = "";

      $scope.CalculateLunchItems = function(){

        var lunchItems = $scope.lunchItems;
        var lunchItemsList = lunchItems.split(',');

        if (lunchItems == "")
        {
          $scope.lunchCountResult = "Please Enter Data First";

        }
        else {

          if (lunchItemsList.length > 3){
            $scope.lunchCountResult = "Too Many Items";
          }
          else {
            $scope.lunchCountResult = "Enjoy Your Lunch";
          }
        }

      };




  }



})();
