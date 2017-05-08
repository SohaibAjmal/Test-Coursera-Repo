(function () {

// angular.module('MenuApp',['data','ui.router']);

angular.module('MenuApp')
.config(MenuRoutesConfig);

MenuRoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function MenuRoutesConfig($stateProvider, $urlRouterProvider) {
  // Redirect to home page if no other URL matches

  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home-template.html'
  })


  //categories

  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/templates/categories-template.html',
    controller: 'CategoriesController as categoriesList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })



  .state('itemList', {
    url: '/item-list/{shortName}',
    templateUrl: 'src/templates/items-template.html',
    controller: 'ItemListController as itemList',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.shortName);
            }]
    }
  });

}


})();
