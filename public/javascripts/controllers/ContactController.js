thisApp
.controller('ContactController', [
  '$state',
  '$scope',
  '$rootScope',
  'HomeService',
  '$stateParams',
  '$timeout',
  function(
    $state,
    $scope,
    $rootScope,
    HomeService,
    $stateParams,
    $timeout
  ){

    $scope.contactTimer = [];

    $timeout(function () {
      $scope.contactTimer = ['1']
    }, 50);

    $rootScope.switchFilter = function(type){
      $rootScope.homeFilter = 'undefined';
      $timeout(function(){
        $rootScope.homeFilter = type;
      }, 100)
    }

  }
])
