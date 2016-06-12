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
    <div class="container-fluid">
      <div class="text-center headerContainer">
        <h1 class="text-center"> Twitch.tv API Viewer</h1>
      </div>
      <!--<div class="container">-->
      <div id="displayer" ng-app="twitchApp" ng-controller="firstCtrl">
        <div class="row">
          <!--<div class="gameBrowserDiv text-center col-xs-12 col-sm-6 col-md-3">-->
          <div class="gameBrowserDiv text-center col-xs-4 col-sm-3 col-md-2 " ng-click="getGamesStreams(gameName, 25)">
            <!--<a href="' + 'https://api.twitch.tv/kraken/streams?game=' + gameName + '">-->
              <!--<img src="box.large" class="img-responsive" >-->
              <!--<img src="' + box.medium + '" class="img-responsive" >-->
            <img src="' + box.medium + '" class="" >
            <!--<img src="' + logo.large + '">-->
            <h4 class="text-center gameTitle">' + gameName + '</h4>
            <!--<h6 class="text-center viewerNumber">' + viewers + '</h6>-->
            <span class="badge">' + viewers + ' Viewers' + '</span>
            <!--</a>-->
          </div>
        </div>

      </div>
      <!--</div>-->

  </body>
</html>
