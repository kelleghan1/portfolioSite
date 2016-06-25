angular.module('portfolioSite')

.controller('ClientController', [
  '$scope',
  '$rootScope',
  'HomeService',
  '$stateParams',
  '$window',
  function(
    $scope,
    $rootScope,
    HomeService,
    $stateParams,
    $window
  ){

    $scope.clientParam = $stateParams.clientParam;
    $scope.currentClient = getClient();

    $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
      $window.scrollTo(0, 0);
      console.log('check');
    })


    function getClient(){
      let result;
      for (var i = 0; i < HomeService.length; i++) {
        if (HomeService[i].url == $scope.clientParam) {
          result = HomeService[i];
        }
      }
      return result;
    }
  }
])
