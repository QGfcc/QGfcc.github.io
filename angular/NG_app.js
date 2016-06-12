var app = angular.module("twitchApp", []);
app.controller("mainCtrl", function ($scope) {
  $scope.curTab = 0;
  $scope.limit = 25;
  $scope.goToTab = function (index) {
    $scope.curTab = index;
  };
});
app.controller("topGameCtrl", ['$scope', '$http', function ($scope, $http) {
//    $scope.data = {top: {game: ["1", "qsdfqsd"]}};
    $http.jsonp(
        "https://api.twitch.tv/kraken/games/top?callback=JSON_CALLBACK"
        + "&limit=25"
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
    var nextSearch = "doom";
    $scope.search = function (query) {
      $http.jsonp(
          "https://api.twitch.tv/kraken/" +
          "search/games" +
          "?" +
          "&limit=25" +
          "&q=" + query +
          "&type=suggest" +
          "&callback=JSON_CALLBACK"
//        "https://api.twitch.tv/kraken/search/games?&limit=25&q=Doom&type=suggest&callback=JSON_CALLBACK"
          )
          .then(
              function (response) {
                $scope.data = response.data;
              },
              function (response) {

              }
          );
    };
    $scope.search(nextSearch);
  }]);