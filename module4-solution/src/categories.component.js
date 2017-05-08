(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/templates/categoriesList.html',
  bindings: {
    categories: '<'
  }
});

})();
