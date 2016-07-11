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

    $scope.clientParam = $stateParams.clientParam;
    $scope.currentClient;

    $rootScope.switchFilter = function(type){
      // $state.go('home')
      // .then(function(){
      $rootScope.homeFilter = 'undefined';
      $timeout(function(){
        $rootScope.homeFilter = type;
      }, 100)
      // })
    }


    function getClient(){
      let result;
      for (var i = 0; i < HomeService.length; i++) {
        if (HomeService[i].url == $scope.clientParam) {
          result = HomeService[i];
        }
      }
      return result;
    }

    $scope.trustHtml = function(src) {
      return $sce.trustAsHtml(src);
    }

    $timeout(function() {
      $scope.currentClient = getClient()
      if ($scope.currentClient) {
        $scope.currentDescript = _.unescape($scope.currentClient.description)
      }
    }, 50);



  }
])
