var app = angular.module("twitchApp", []);
app.controller("mainCtrl", function ($scope) {
  $scope.limit = 25;
  $scope.curTab = 0;
  $scope.curSearch = "";
//  $scope.curSearchType = "games";
  $scope.curSearchType = "channels";
  $scope.curGame = "";
  $scope.searchLive = true;
  $scope.curStream = "";
//  $scope.curStream = "joshog";
  $scope.goToTab = function (index) {
    if (index == 2 && $scope.curGame == "" || index == 3 && $scope.curStream == "") {
      return;
    }
    $scope.curTab = index;
  };
  $scope.updateStreams = function (gameName) {
    $scope.curGame = gameName;
  };
  $scope.updateStream = function (channelName) {
    $scope.curStream = channelName;
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
app.directive("topGame", function () {
  return {
    restrict: "A",
    templateUrl: "angular/html/topGame.html"
  };
});
app.controller("searchGameCtrl", ['$scope', '$http', function ($scope, $http) {
//    var nextSearch = "doom";
    $scope.lastGameSearch = "";
    $scope.lastChannelSearch = "";
    $scope.lastStreamSearch = "";
    $scope.search = function (query) {
      switch ($scope.curSearchType) {
        case "games":
          $http.jsonp(
              "https://api.twitch.tv/kraken/" +
              "search/games" +
              "?" +
//          "&limit=" + $scope.limit +
              "&q=" + query +
              "&type=suggest" +
              "&live=" + $scope.searchLive +
              "&callback=JSON_CALLBACK"
              )
              .then(
                  function (response) {
                    $scope.data = response.data;
                    $scope.goToTab(1);
                  },
                  function (response) {

                  }
              );
          break;
        case "channels":
          $http.jsonp(
              "https://api.twitch.tv/kraken/" +
//          "search/games" +
//          "search/channels" +
              "search/" + $scope.curSearchType +
              "?" +
//          "&limit=" + $scope.limit +
              "&q=" + query +
              "&type=suggest" +
              "&live=" + $scope.searchLive +
              "&callback=JSON_CALLBACK"
              )
              .then(
                  function (response) {
                    $scope.data = response.data;
                    $scope.goToTab(1);
                  },
                  function (response) {

                  }
              );
          break;
        case "streams":
          $http.jsonp(
              "https://api.twitch.tv/kraken/" +
//          "search/games" +
//          "search/channels" +
              "search/" + $scope.curSearchType +
              "?" +
              "&limit=" + $scope.limit +
              "&q=" + query +
//              "&type=suggest" +
//              "&live=" + $scope.searchLive +
              "&callback=JSON_CALLBACK"
              )
              .then(
                  function (response) {
                    $scope.data = response.data;
                    $scope.goToTab(1);
                  },
                  function (response) {

                  }
              );
          break;
      }

    }

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
    $scope.$watch('curSearchType', function () {
      if ($scope.curSearch != "") {
        switch ($scope.curSearchType) {
          case "games":
            if ($scope.curSearch != $scope.lastGameSearch) {
              $scope.lastGameSearch = $scope.curSearch;
              $scope.search($scope.curSearch);
            }
            break;
          case "channels":
            if ($scope.curSearch != $scope.lastChannelSearch) {
              $scope.lastChannelSearch = $scope.curSearch;
              $scope.search($scope.curSearch);
            }
            break;
          case "streams":
            if ($scope.curSearch != $scope.lastStreamSearch) {
              $scope.lastStreamSearch = $scope.curSearch;
              $scope.search($scope.curSearch);
            }
            break;
        }
      }
    });
//    $scope.search(nextSearch);
  }]);
app.directive("gameSearch", function () {
  return {
    restrict: "A",
    templateUrl: "angular/html/gameSearch.html"
  };
});
app.directive("channelSearch", function () {
  return {
    restrict: "A",
    templateUrl: "angular/html/channelSearch.html"
  };
});
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
app.directive("streams", function () {
  return {
    restrict: "A",
    templateUrl: "angular/html/streams.html"
  };
});
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
        alert("trest");
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