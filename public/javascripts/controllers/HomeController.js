angular.module('portfolioSite')

.controller('HomeController', [
  '$scope',
  '$rootScope',
  'HomeService',
  '$stateParams',
  function(
    $scope,
    $rootScope,
    HomeService,
    $stateParams
  ){

    $scope.clientArr = HomeService;

    $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
      $window.scrollTo(0, 0);
      console.log('check');
    })

  }
])
