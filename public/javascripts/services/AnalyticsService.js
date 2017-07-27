thisApp

.factory('AnalyticsService', function(){

  console.log("SERVICE");

  this.recordPageview = function(url) {
    ga('set', 'page', url);
    ga('send', 'pageview');
  };

  return true;

})
