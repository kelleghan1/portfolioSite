angular.module('portfolioSite', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {
  $urlRouterProvider.otherwise("/");
  $uiViewScrollProvider.useAnchorScroll()
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })
  .state('client', {
    url: '/:clientParam',
    templateUrl: 'views/client.html',
    controller: 'ClientController'
  })

})
