var thisApp = angular.module('portfolioSite', ['ui.router', 'ngAnimate'])

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
  .state('development', {
    url: '/development',
    templateUrl: 'views/development.html',
    controller: 'DevelopmentController'
  })
  .state('geoball', {
    url: '/geoball',
    templateUrl: 'views/geoball.html',
    // controller: 'GeoballController'
  })

})
