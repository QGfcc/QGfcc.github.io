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


    <script src= "http://player.twitch.tv/js/embed/v1.js"></script>

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
          <li class="" role="presentation" ng-class="{active : curTab == 0}">
            <a href="" ng-click="goToTab(0)">
              <!--<a href="#topGame" id="topGame" ng-click="goToTab(0)" ng-focus="goToTab(0)">-->
              <!--<a href="#topGame" id="topGame" ng-focus="goToTab(0)">-->
              Top Games
            </a>
          </li>
          <li class="" role="presentation" ng-class="{active : curTab == 1}">
            <a href="" ng-click="goToTab(1)">
              <!--<a href="#searchGame" id="searchGame" ng-click="goToTab(1)"  ng-focus="goToTab(1)">-->
              <!--<a href="#searchGame" id="searchGame"  ng-focus="goToTab(1)">-->
              Search
            </a>
          </li>
          <li class="" role="presentation" ng-class="{active : curTab == 2,disabled : curGame == ''}" >
            <a href="" ng-click="goToTab(2)">
              <!--<a href="#searchStream" id="searchStream" ng-click="goToTab(2)"  ng-focus="goToTab(2)">-->
              <!--<a href="#searchStream" id="searchStream"   ng-focus="goToTab(2)">-->
              Streams
            </a>
          </li>
          <li class="" role="presentation" ng-class="{active : curTab == 3,disabled : curStream == ''}" >
            <a href="" ng-click="goToTab(3)">
              <!--<a href="#searchStream" id="searchStream" ng-click="goToTab(2)"  ng-focus="goToTab(2)">-->
              <!--<a href="#searchStream" id="searchStream"   ng-focus="goToTab(2)">-->
              Stream
            </a>
          </li>
        </ul>
      </nav>
      <form class="form-inline text-center" ng-show="curTab == 1">
        <input type="text" class="form-control" ng-model="curSearch" placeholder="Search Game here">
        <label ng-show="curSearchType == 'game'">
          <!--<input type="radio" class="form-control" ng-model="curSearchType" value="game" ng-selected="true">-->
          <input type="checkbox" class="form-control" ng-model="searchLive">
          Live
        </label>
        <label>
          <!--<input type="radio" class="form-control" ng-model="curSearchType" value="game" ng-selected="true">-->
          <input type="radio" class="form-control" ng-model="curSearchType" value="game">
          Game
        </label>
        <label>
          <input type="radio" class="form-control" ng-model="curSearchType" value="channel">
          Channel
        </label>
        <label>
          <input type="radio" class="form-control" ng-model="curSearchType" value="stream">
          Stream
        </label>
      </form>
      <div id="displayer">



        <div class="row" ng-controller="topGameCtrl" ng-show="curTab == 0">
          <div class="gameBrowserDiv text-center col-xs-4 col-sm-3 col-md-2 " ng-repeat="GAME in data.top" ng-click="updateStream(GAME.game.name)"
               >
            <img ng-src="{{GAME.game.box.medium}}" class="" >
            <h4 class="text-center gameTitle">{{GAME.game.name}}</h4>
            <span class="badge">{{GAME.viewers| number}} Viewers</span>
          </div>
        </div>



        <div class="row" ng-controller="searchGameCtrl" ng-show="curTab == 1">
          <div class="gameBrowserDiv text-center col-xs-4 col-sm-3 col-md-2 " ng-repeat="GAME in data.games" ng-click="updateStream(GAME.name)"
               >
            <img ng-src="{{GAME.box.medium}}" class="" >
            <h4 class="text-center gameTitle">{{GAME.name}}</h4>
            <span class="badge">{{GAME.popularity| number}} Viewers</span>
          </div>
        </div>



        <div class="row" ng-controller="searchStreamCtrl" ng-show="curTab == 2">

          <div class="text-center headerContainer">
            <h1>
              {{data.streams[0].game}}
            </h1>
          </div>
          <ul class="media-list">
            <div class="media col-xs-12 col-sm-12 col-md-6" ng-repeat="stream in data.streams">
              <div class="media-left media-middle">
                <a href="" ng-href="{{stream.channel.url}}">
                  <img class="media-object" ng-src="{{stream.preview.large}}">
                </a>
              </div>
              <div class="media-body">
                <a href="" ng-href="{{stream.channel.url}}">
                  <h4 class="media-heading">
                    <a href="" ng-href="{{stream.channel.url}}">
                      {{stream.channel.status}}
                    </a>
                  </h4>
                </a>
                <span class="badge">{{stream.viewers| number}} Viewers</span>
                <div class="media">
                  <div class="media-left media-middle">
                    <a href="" ng-href="{{stream.channel.url + '/profile'}}">
                      <img class="media-object subMedia" ng-src="{{stream.channel.logo}}">
                    </a>
                  </div>
                  <div class="media-body">
                    <h5 class="media-heading">
                      <a href="" ng-href="{{stream.channel.url + '/profile'}}">
                        {{stream.channel.display_name}}
                      </a>
                    </h5>
                    <span class="badge">{{stream.channel.views| number}} Views</span>
                    <br>
                    <span class="badge">{{stream.channel.followers| number}} Followers</span>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>

        <!--<div class="row" ng-controller="streamCtrl" ng-show="curTab == 3" ng-if="curTab == 3">-->
        <div class="row" ng-controller="streamCtrl" ng-show="curTab == 3" >
          <h1> test </h1>
          <div id="twitchPlayerDiv"></div>
        </div>
      </div>
    </div>
  </body>
</html>
