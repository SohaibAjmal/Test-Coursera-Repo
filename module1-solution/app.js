(function () {
'use strict'

angular.module('LunchCheckApp', [])

.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']
  function LunchCheckController($scope, $injector)
  {
      $scope.lunchItems = "";

      $scope.lunchCountResult = "";

      $scope.CheckLunchItems = function(){

        var lunchItems = $scope.lunchItems;

        if (lunchItems == ""){
          $scope.lunchCountResult = "Please Enter Data First";
        }
        else {
          $scope.lunchCountResult = CalculateLunchItems(lunchItems.split(','))
        }

      };


      function CalculateLunchItems(lunchItemsList)
      {
        if (lunchItemsList.length > 3){
            return "Too Many Items";
          }
          else {
            return "Enjoy Your Lunch";
          }

      }




  }



})();
