(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['message','GetMenuService'];
function SignUpController(message,GetMenuService) {


  var signUp = this;

  signUp.submit = function () {

    var shortNameValue = signUp.user.shortName;
    var userInfo = signUp.user;
    var promise = GetMenuService.saveUserInfo(userInfo);

    promise.then(function (response) {
      if (response == "Your information has been saved")
      {
        signUp.user.message = response;
      }
      else {

        signUp.user.message = "No such menu number exists"
      }


    })
    .catch(function (error) {
      signUp.user.message = "No such menu number exists"
    })

  };


}

})();
