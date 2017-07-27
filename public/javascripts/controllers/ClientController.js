thisApp
.controller('ClientController', [
  '$state',
  '$scope',
  '$rootScope',
  'HomeService',
  '$stateParams',
  '$window',
  '$timeout',
  '$sce',
  function(
    $state,
    $scope,
    $rootScope,
    HomeService,
    $stateParams,
    $window,
    $timeout,
    $sce
  ){


    $rootScope.hamClick = false;

    $rootScope.switchFilter = function(type){
      $rootScope.homeFilter = 'undefined';
      $timeout(function(){
        $rootScope.homeFilter = type;
      }, 100)
    }

    function getClient(){
      var result;
      for (var i = 0; i < HomeService.length; i++) {
        if (HomeService[i].url == $stateParams.clientParam) {
          result = HomeService[i];
        }
      }
      return result;
      console.log($scope.currentClient);

    }

    $scope.trustHtml = function(src) {
      return $sce.trustAsHtml(src);
    }

    $timeout(function() {
      $scope.currentClient = getClient()
      if ($scope.currentClient) {
        $scope.currentDescript = _.unescape($scope.currentClient.description)
      }
    }, 100);

  }
])
