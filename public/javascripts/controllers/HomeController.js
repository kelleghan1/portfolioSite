thisApp
.controller('HomeController', [
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

    $scope.clientArr;
    $rootScope.homeFilter;

    $rootScope.switchFilter = function(type){
      // $state.go('home')
      // .then(function(){
      $rootScope.homeFilter = 'undefined';
      $timeout(function(){
        $rootScope.homeFilter = type;
      }, 10)
      // })
    }

    var items = HomeService;


    $timeout(function() {
      $scope.clientArr = items;
    }, 200);


    function isTouchDevice() {
      var el = document.createElement('div');
      el.setAttribute('ongesturestart', 'return;'); // or try "ontouchstart"
      return typeof el.ongesturestart === "function";
    }



  }
])
