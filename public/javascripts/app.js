var thisApp = angular.module('portfolioSite', ['ui.router', 'ngAnimate'])

.config(function($stateProvider, $urlRouterProvider, $uiViewScrollProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");
  $uiViewScrollProvider.useAnchorScroll()
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html',
    controller: 'ContactController'
  })
  .state('geoballdemo', {
    url: '/geoballdemo',
    templateUrl: 'views/geoballdemo.html',
    controller: 'GeoballController'
  })
  .state('client', {
    url: '/:clientParam',
    templateUrl: 'views/client.html',
    controller: 'ClientController'
  })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

})
