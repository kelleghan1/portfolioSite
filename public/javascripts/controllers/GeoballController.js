thisApp
.controller('GeoballController', [
  '$state',
  '$http',
  '$scope',
  '$rootScope',
  'HomeService',
  '$stateParams',
  '$window',
  '$timeout',
  '$sce',
  function(
    $state,
    $http,
    $scope,
    $rootScope,
    HomeService,
    $stateParams,
    $window,
    $timeout,
    $sce
  ){

    // $rootScope.$on('$stateChangeSuccess', function (event) {
    //   console.log("ROOT");
    //   $window.ga('send', 'pageview', $location.path());
    // });

    $rootScope.switchFilter = function(type){
      $rootScope.homeFilter = 'undefined';
      $timeout(function(){
        $rootScope.homeFilter = type;
      }, 10)
    }

    $scope.$on('$viewContentLoaded', function(){

      var canvas = document.createElement('canvas');
      angular.element(document.getElementById('geoContainer')).append(canvas)
      var ctx = canvas.getContext('2d');
      var launch = [];
      var boxes = [];
      var targs = [];
      var launchx = $('#geoContainer').width()/2;
      var launchy = $('#geoContainer').height()-1;
      var shots = 5;
      var score = 0;
      var finalScore = 0;
      var imageSearch = ['landscape'];

      var getBackground = function(){
        // $http({
          // method: "GET",
          // url: 'http://api.pixplorer.co.uk/image?word=' + imageSearch[Math.floor(Math.random()*imageSearch.length)] + '&amount=5&size=tb',
        // })
        // .then(function(res) {
          // console.log(res.data.images[0].imageurl);
          document.getElementById('geoContainer').style.backgroundImage = 'url("/images/geoball/geoballbackground.jpeg")';
          document.getElementById('geoContainer').style.backgroundSize = 'cover';
        // })
      }();

      canvas.width = $('#geoContainer').width();
      canvas.height = $('#geoContainer').height();
      $(window).resize(function (){
        canvas.height = $('#geoContainer').width();
        canvas.width = $('#geoContainer').height();
        ctx.clearRect(0,0,$('#geoContainer').width(),$('#geoContainer').height());
        shots = 5;
        score = 0;
        launch.length = 0;
        boxes.length = 0;
        targs.length = 0;
        targetsGenerate()
        targetDraw();
        obstacles();
      });

      // postScore();

      function obstacles(){
        var basex = ($('#geoContainer').width()/2);
        var basey = ($('#geoContainer').height()-1);

        for (var i = 0; i < 6; i++) {
          var randomx = Math.floor(Math.random()*$('#geoContainer').width());
          var randomy = Math.floor(Math.random()*(($('#geoContainer').height()*0.75)-100));
          var randomw = Math.floor(Math.random()*(($('#geoContainer').width()*0.3))+50);
          var randomh = Math.floor(Math.random()*(($('#geoContainer').height()*0.3))+50);

          boxes.push([randomx, randomy, randomw, randomh]);
          ctx.fillStyle = 'rgba(0,255,255,0.75)';
          ctx.fillRect(boxes[i][0], boxes[i][1], boxes[i][2], boxes[i][3]);
        }

        ctx.beginPath();
        ctx.fillStyle = 'rgba(0,255,255,0.75)';
        ctx.moveTo(basex, basey - 20);
        ctx.lineTo(basex + 20, basey);
        ctx.lineTo(basex - 20, basey);
        ctx.closePath();
        ctx.fill();
      }

      function targetsGenerate(){
        for (var i = 0; i < 50; i++) {
          var randomtx = Math.floor(Math.random()*$('#geoContainer').width());
          var randomty = Math.floor(Math.random()*($('#geoContainer').height()*0.75-100));
          targs.push([randomtx, randomty]);
        }
      }

      function targetDraw () {
        for (var i = 0; i < targs.length; i++) {
          ctx.beginPath();
          ctx.arc( targs[i][0], targs[i][1], 10, 0, Math.PI*(2) );
          ctx.fillStyle = 'rgba(255,100,100,0.75)';
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 3;
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
        }
      }

      targetsGenerate();
      targetDraw();
      obstacles();

      function projectile(xpos,ypos){
        var xv = (xpos-launchx);
        var yv = (ypos-launchy);
        var loopcount = 0;
        var sconstant = ( Math.sqrt((xv*xv)+(yv*yv)) )

        launch.push(1);

        var loopTimer = setInterval(function(xpos, ypos) {

          if( launchx <= 0 || launchx >= canvas.width) {
            xv = -xv;
          }

          if( launchy <= 0 || launchy >= canvas.height) {
            yv = -yv;
          }

          // vertical collisions

          if ( Math.floor(launchy) == Math.floor(boxes[0][1]) || Math.floor(launchy) == Math.floor(boxes[0][1] + boxes[0][3]) ) {
            if ( Math.floor(launchx) >= Math.floor(boxes[0][0]) && Math.floor(launchx) <= Math.floor(boxes[0][0] + boxes[0][2]) ) {
              yv = -yv;
            }
          }

          if ( Math.floor(launchy) == Math.floor(boxes[1][1]) || Math.floor(launchy) == Math.floor(boxes[1][1] + boxes[1][3]) ) {
            if ( Math.floor(launchx) >= Math.floor(boxes[1][0]) && Math.floor(launchx) <= Math.floor(boxes[1][0] + boxes[1][2]) ) {
              yv = -yv;
            }
          }

          if ( Math.floor(launchy) == Math.floor(boxes[2][1]) || Math.floor(launchy) == Math.floor(boxes[2][1] + boxes[2][3]) ) {
            if ( Math.floor(launchx) >= Math.floor(boxes[2][0]) && Math.floor(launchx) <= Math.floor(boxes[2][0] + boxes[2][2]) ) {
              yv = -yv;
            }
          }

          if ( Math.floor(launchy) == Math.floor(boxes[3][1]) || Math.floor(launchy) == Math.floor(boxes[3][1] + boxes[3][3]) ) {
            if ( Math.floor(launchx) >= Math.floor(boxes[3][0]) && Math.floor(launchx) <= Math.floor(boxes[3][0] + boxes[3][2]) ) {
              yv = -yv;
            }
          }

          if ( Math.floor(launchy) == Math.floor(boxes[4][1]) || Math.floor(launchy) == Math.floor(boxes[4][1] + boxes[4][3]) ) {
            if ( Math.floor(launchx) >= Math.floor(boxes[4][0]) && Math.floor(launchx) <= Math.floor(boxes[4][0] + boxes[4][2]) ) {
              yv = -yv;
            }
          }

          if ( Math.floor(launchy) == Math.floor(boxes[5][1]) || Math.floor(launchy) == Math.floor(boxes[5][1] + boxes[5][3]) ) {
            if ( Math.floor(launchx) >= Math.floor(boxes[5][0]) && Math.floor(launchx) <= Math.floor(boxes[5][0] + boxes[5][2]) ) {
              yv = -yv;
            }
          }

          // horizontal collisions

          if ( Math.floor(launchx) == Math.floor(boxes[0][0]) || Math.floor(launchx) == Math.floor(boxes[0][0] + boxes[0][2]) ) {
            if ( Math.floor(launchy) >= Math.floor(boxes[0][1]) && Math.floor(launchy) <= Math.floor(boxes[0][1] + boxes[0][3]) ) {
              xv = -xv;
            }
          }

          if ( Math.floor(launchx) == Math.floor(boxes[1][0]) || Math.floor(launchx) == Math.floor(boxes[1][0] + boxes[1][2]) ) {
            if ( Math.floor(launchy) >= Math.floor(boxes[1][1]) && Math.floor(launchy) <= Math.floor(boxes[1][1] + boxes[1][3]) ) {
              xv = -xv;
            }
          }

          if ( Math.floor(launchx) == Math.floor(boxes[2][0]) || Math.floor(launchx) == Math.floor(boxes[2][0] + boxes[2][2]) ) {
            if ( Math.floor(launchy) >= Math.floor(boxes[2][1]) && Math.floor(launchy) <= Math.floor(boxes[2][1] + boxes[2][3]) ) {
              xv = -xv;
            }
          }

          if ( Math.floor(launchx) == Math.floor(boxes[3][0]) || Math.floor(launchx) == Math.floor(boxes[3][0] + boxes[3][2]) ) {
            if ( Math.floor(launchy) >= Math.floor(boxes[3][1]) && Math.floor(launchy) <= Math.floor(boxes[3][1] + boxes[3][3]) ) {
              xv = -xv;
            }
          }

          if ( Math.floor(launchx) == Math.floor(boxes[4][0]) || Math.floor(launchx) == Math.floor(boxes[4][0] + boxes[4][2]) ) {
            if ( Math.floor(launchy) >= Math.floor(boxes[4][1]) && Math.floor(launchy) <= Math.floor(boxes[4][1] + boxes[4][3]) ) {
              xv = -xv;
            }
          }

          if ( Math.floor(launchx) == Math.floor(boxes[5][0]) || Math.floor(launchx) == Math.floor(boxes[5][0] + boxes[5][2]) ) {
            if ( Math.floor(launchy) >= Math.floor(boxes[5][1]) && Math.floor(launchy) <= Math.floor(boxes[5][1] + boxes[5][3]) ) {
              xv = -xv;
            }
          }

          // target collisions

          for (var i = 0; i < targs.length; i++) {

            var collision = (launchx >= (targs[i][0]- 15) && launchx <= (targs[i][0] + 15)) &&
            (launchy >= (targs[i][1]- 15) && launchy <= (targs[i][1] + 15))

            if (collision) {
              score += 1;
              ctx.beginPath();
              ctx.arc(targs[i][0], targs[i][1], 15, 0, Math.PI*(2));
              ctx.strokeStyle = 'yellow';
              ctx.closePath();
              ctx.stroke();
              targs.splice(i,1);
              postScore();
            }
          }

          obstacles();
          targetDraw();
          ctx.beginPath();
          ctx.arc(launchx, launchy, 3, 0, Math.PI*(2));
          ctx.fillStyle = 'black';
          ctx.strokeStyle = 'white';
          ctx.closePath();
          ctx.stroke();
          ctx.fill();

          launchx += (xv/(sconstant*1.3));
          launchy += (yv/(sconstant*1.3));
          loopcount += 1;

          if (loopcount > 2700){
            clearInterval(loopTimer);
            launchx = ($('#geoContainer').width()/2);
            launchy = ($('#geoContainer').height());
            launch.length = 0;
            scoreLog();
            postScore();
          }
        }, 1/1600);

        ctx.clearRect(0,0,$('#geoContainer').width(),$('#geoContainer').height());

      }

      $('canvas').on('click', function(e){
        var xpos = e.pageX - canvas.offsetLeft;
        var ypos = e.pageY - canvas.offsetTop;

        if (launch.length == 0 && shots != 0){
          launchx = ($('#geoContainer').width()/2);
          launchy = ($('#geoContainer').height()-1)
          projectile(xpos, ypos);
          shots -= 1;

          postScore();
        }
      })

      function scoreLog() {

        if (shots == 0) {

          if (score > finalScore) {
            finalScore = score;
            localStorage.setItem('finalScore', finalScore);
          }

          postScore();

          function playAgain(){
            return window.prompt('PLAY AGAIN? ENTER YES OR NO');
          };

          if (playAgain().toUpperCase() == 'YES') {
            ctx.clearRect(0,0,$('#geoContainer').width(),$('#geoContainer').height());
            shots = 5;
            score = 0;
            launch.length = 0;
            boxes.length = 0;
            targs.length = 0;
            targetsGenerate()
            targetDraw();
            obstacles();

          }else{
            $('#gameover > p').html('THANKS FOR PLAYING');
          }
        }
      }
      if (localStorage.getItem('finalScore')) {

        var highScore = localStorage.getItem('finalScore')
      } else {
        var highScore = 0
      }

      function postScore() {
        $('#gameover > p').html('Shots Remaining: ' + shots +'  / Score: ' + score + ' / High Score: ' +  highScore);
      }
    })

  }
])
