<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" ></script>

    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

    <title></title>

    <!--to delete-->
    <!--<script src="js/autoReload.js" type="text/javascript"></script>-->
    <!--END to delete-->

    <!--custom pages-->
<!--    <script src="js/twitchAPI.js" type="text/javascript"></script>-->
    <script src="angular/NG_twitchAPI.js" type="text/javascript"></script>
    <script src="angular/NG_app.js" type="text/javascript"></script>
    <link href="css/twitchAPI.css" rel="stylesheet" type="text/css"/>

    <!--END custom pages-->

  </head>
  <body>
    <div class="container-fluid"  ng-app="twitchApp" ng-controller="mainCtrl">
      <div class="text-center headerContainer">
        <h1 class="text-center"> Twitch.tv API Viewer</h1>
      </div>
      <!--<ul class="nav nav-pills text-center">-->
      <nav class="text-center">
        <ul class="pagination">
          <li class="" role="presentation"><a href="" ng-click="goToTab(0)">Top Games</a></li>
          <li class="" role="presentation"><a href="" ng-click="goToTab(1)">Game Search</a></li>
          <li class="" role="presentation"><a href="" ng-click="goToTab(2)">Streams</a></li>
        </ul>
      </nav>
      <div id="displayer">
        <div class="row" ng-controller="topGameCtrl" ng-show="curTab == 0">
          <div class="gameBrowserDiv text-center col-xs-4 col-sm-3 col-md-2 " ng-click="getGamesStreams(gameName, 25)"
               ng-repeat="GAME in data.top">
            <img ng-src="{{GAME.game.box.medium}}" class="" >
            <h4 class="text-center gameTitle">{{GAME.game.name}}</h4>
            <span class="badge">{{GAME.viewers| number}} Viewers</span>
          </div>
        </div>
        <div class="row" ng-controller="searchGameCtrl" ng-show="curTab == 1">
          <div class="gameBrowserDiv text-center col-xs-4 col-sm-3 col-md-2 " ng-click="getGamesStreams(gameName, 25)"
               ng-repeat="GAME in data.games">
            <img ng-src="{{GAME.box.medium}}" class="" >
            <h4 class="text-center gameTitle">{{GAME.name}}</h4>
            <span class="badge">{{GAME.popularity| number}} Viewers</span>
          </div>
        </div>

      </div>

  </body>
</html>
