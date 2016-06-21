var app = angular.module("twitchApp", []);
app.controller("mainCtrl", function ($scope) {
  $scope.limit = 25;
  $scope.curTab = 0;
  $scope.curSearch = "";
  $scope.curSearchType = "game";
  $scope.curGame = "";
  $scope.searchLive = true;
  $scope.curStream = "joshog";
  $scope.goToTab = function (index) {
    if (index == 2 && $scope.curGame == "" || index == 3 && $scope.curStream == "") {
      return;
    }
    $scope.curTab = index;
  };
  $scope.updateStream = function (gameName) {
    $scope.curGame = gameName;
  };
});
app.controller("topGameCtrl", ['$scope', '$http', function ($scope, $http) {
//    $scope.data = {top: {game: ["1", "qsdfqsd"]}};
    $http.jsonp(
        "https://api.twitch.tv/kraken/games/top?callback=JSON_CALLBACK"
        + "&limit=" + $scope.limit
        )
        .then(
            function (response) {
              $scope.data = response.data;
            },
            function (response) {

            }
        );
  }]);
app.controller("searchGameCtrl", ['$scope', '$http', function ($scope, $http) {
//    var nextSearch = "doom";
    $scope.search = function (query) {
      $http.jsonp(
          "https://api.twitch.tv/kraken/" +
          "search/games" +
          "?" +
//          "&limit=" + $scope.limit +
          "&q=" + query +
          "&type=suggest" +
          "&live=" + $scope.searchLive +
          "&callback=JSON_CALLBACK"
//        "https://api.twitch.tv/kraken/search/games?&limit=25&q=Doom&type=suggest&callback=JSON_CALLBACK"
          )
          .then(
              function (response) {
                $scope.data = response.data;
                $scope.goToTab(1);
              },
              function (response) {

              }
          );
    };

    $scope.$watch('curSearch', function () {
      if ($scope.curSearch != "") {
        $scope.search($scope.curSearch);
      }
    });
    $scope.$watch('searchLive', function () {
      if ($scope.curSearch != "") {
        $scope.search($scope.curSearch);
      }
    });
//    $scope.search(nextSearch);
  }]);
app.controller("searchStreamCtrl", ['$scope', '$http', function ($scope, $http) {
//    var nextStream = "doom";
    $scope.goToStream = function (query) {
      $http.jsonp(
          "https://api.twitch.tv/kraken/" +
          "streams" +
          "?" +
          "limit=" + $scope.limit +
          "&game=" + query +
          "&callback=JSON_CALLBACK"
          )
          .then(
              function (response) {
                $scope.data = response.data;
                $scope.goToTab(2);
              },
              function (response) {

              }
          );
    };
    $scope.$watch('curGame', function () {
      if ($scope.curGame != "") {
        $scope.goToStream($scope.curGame);
      }
    });
//    $scope.goToStream(nextStream);
  }]);
app.controller("streamCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.swapStream = function (streamName) {
      var options = {
        width: 854,
        height: 480,
        channel: streamName,
        //video: "{VIDEO_ID}"
      };
      $scope.player = new Twitch.Player("twitchPlayerDiv", options);
//      $scope.playerInit = function () {
//        alert("test");
//        $scope.player.setVolume(0.5);
//        $scope.player.pause();
//        $scope.player.removeEventListener("ready", $scope.playerInit);
//      }
//      $scope.player.addEventListener("ready", $scope.playerInit);
    }
    $scope.$watch('curStream', function () {
      if ($scope.curStream != "") {
        $scope.swapStream($scope.curStream);
        $scope.goToTab(3);
      }
    });
    $scope.$watch('curTab', function () {
      if ($scope.curTab == 3) {
//        $scope.swapStream($scope.curStream);
      }
      else if ($scope.curStream != "") {
        $scope.player.pause();
      }
    });
  }]);