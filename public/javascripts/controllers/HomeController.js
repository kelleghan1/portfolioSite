thisApp
.controller('HomeController', [
  '$location',
  '$state',
  '$scope',
  '$rootScope',
  'HomeService',
  '$stateParams',
  '$timeout',
  function(
    $location,
    $state,
    $scope,
    $rootScope,
    HomeService,
    $stateParams,
    $timeout
  ){

    $scope.clientArr;
    $rootScope.homeFilter;
    $rootScope.currentClient;
    $rootScope.hamClick = false;

    $rootScope.switchFilter = function(type){
      $rootScope.homeFilter = 'undefined';
      $timeout(function(){
        $rootScope.homeFilter = type;
      }, 100)
    }

    var items = HomeService;

    $timeout(function() {
      $scope.clientArr = items;
    }, 200);

  }
])
