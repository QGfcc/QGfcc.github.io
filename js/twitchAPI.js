/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayTopGames(response) {
//    for (var i = 0; i < response.top.length; i++) {
//        var title = $("<h1></h1>").text(response.top[i].game.name);
//        var img1 = $("<img>").attr("src", response.top[i].game.box.large);
//        var img2 = $("<img>").attr("src", response.top[i].game.logo.large);
//        var a = $("<a></a>").attr("href", "https://api.twitch.tv/kraken/streams?game=" + response.top[i].game.name);
//        var container = $("<div></div>");
//        a.append(title).append(img1).append(img2);
//        container.append(a);
//        $("#displayer").append(container);
//    }


  $("#displayer").text("");
  for (var i = 0; i < response.top.length; i++) {
    displayGames(
        $("#displayer"),
        response.top[i].game.name,
        response.top[i].viewers,
        response.top[i].game.box,
//        response.top[i].game.box,
        response.top[i].game.logo
//        "https://api.twitch.tv/kraken/streams?game=" + response.top[i].game.name
        );
  }
}
function displaySearchGames(response) {
//    for (var i = 0; i < response.games.length; i++) {
//        var title = $("<h1></h1>").text(response.games[i].name);
//        var img1 = $("<img>").attr("src", response.games[i].box.large);
//        var img2 = $("<img>").attr("src", response.games[i].logo.large);
//        var container = $("<div></div>");
//        container.append(title).append(img1).append(img2);
//        $("#displayer").append(container);
//    }

  $("#displayer").text("");
  for (var i = 0; i < response.games.length; i++) {
    displayGames(
        $("#displayer"),
        response.games[i].name,
        response.games[i].popularity,
        response.games[i].box,
        response.games[i].logo
//        "https://api.twitch.tv/kraken/streams?game=" + response.games[i].name
        );
  }
}
function displayGames(CONTAINER, gameName, viewers, box, logo) {
//    for (var i = 0; i <length; i++) {
  container = $(
//      '<div class="row">' +
//      '<div class="gameBrowserDiv text-center col-xs-12 col-sm-6 col-md-3">' +
      '<div class="gameBrowserDiv text-center col-xs-4 col-sm-3 col-md-2 ">' +
//            '<a href="' + 'https://api.twitch.tv/kraken/streams?game=' + gameName + '">' +
//      '<img src="' + box.large + ' class="img-responsive" ">' +
//      '<img src="' + box.medium + '" class="img-responsive" >' +
      '<img src="' + box.medium + '" class="" >' +
//            '<img src="' + logo.large + '">' +
      '<h4 class="text-center gameTitle">' + gameName + '</h4>' +
//      '<h6 class="text-center viewerNumber">' + viewers + '</h6>' +
      '<span class="badge">' + viewers + ' Viewers' + '</span>' +
//            '</a>' +
//      '</div>' +
      '</div>'
      );
  container.click(function () {
//        alert('test');
    getGamesStreams(
        gameName,
        25
        );
  });
  CONTAINER.append(container);
//    }
}
function displayGamesStreams(response) {
//    if (response.hasOwnProperty("streams") && response.streams.length > 0) {
//        var game = response.streams[0].game;
//        var gameTitle = $("<h1></h1>").text(game);
//        $("#displayer").append(gameTitle);
//        for (var i = 0; i < response.streams.length; i++) {
//            var status = $("<h1></h1>").text(response.streams[i].channel.status);
//            var img1 = $("<img>").attr("src", response.streams[i].channel.logo);
////        var img2 = $("<img>").attr("src", response.streams[i].channel.banner);
////            var img3 = $("<img>").attr("src", response.streams[i].channel.video_banner);
//            var img4 = $("<img>").attr("src", response.streams[i].preview.large);
//            var a = $("<a></a>").attr("href", response.streams[i].channel.url);
//            a.css("display","block");
//            var container = $("<div></div>");
////        container.append(title).append(img1).append(img2);
////        a.append(title).append(img1).append(img2).append(img3).append(img4);
////            a.append(status).append(img1).append(img3).append(img4);
//            a.append(status).append(img1).append(img4);
//            container.append(a);
//            $("#displayer").append(container);
//        }
//    }
  $("#displayer").text("");
  displayGamesStreams3(response);
}
function displayGamesStreams2(response) {
  if (response.hasOwnProperty("streams") && response.streams.length > 0) {
    var game = response.streams[0].game;
    var gameTitle = $("<h1></h1>").text(game);
    $("#displayer").append(gameTitle);
    var mediaList = $("<ul></ul>").addClass("media-list");
    $("#displayer").append(mediaList);
    for (var i = 0; i < response.streams.length; i++) {

//            var status = $("<h1></h1>")
      var status = $("<h4></h4>")
          .text(response.streams[i].channel.status)
          .addClass("media-heading");
      var img1 = $("<img>")
          .attr("src", response.streams[i].preview.large)
          .addClass("media-object");
      var img4 = $("<img>").attr("src", response.streams[i].channel.logo)
//                    .addClass("pull-left");
          .addClass("media-object")
          .addClass("subMedia");
      var name = $("<h5></h5>")
          .text(response.streams[i].channel.display_name)
          .addClass("media-heading");
//            var media = $('<div></div>').addClass("media");
      var media = $('<li></li>').addClass("media");
      var mediaLeft = $('<div></div>')
          .addClass("media-left")
          .addClass("media-middle");
      var mediaBody = $('<div></div>').addClass("media-body");
      var subMedia = $('<div></div>').addClass("media");
      var a1 = $("<a></a>").attr("href", response.streams[i].channel.url);
      var a2 = $("<a></a>").attr("href", response.streams[i].channel.url);
      var a3 = $("<a></a>").attr("href", response.streams[i].channel.url + "/profile");
//                    .addClass("media-left")
//                    .addClass("media-middle");
      var a4 = $("<a></a>").attr("href", response.streams[i].channel.url + "/profile");
//                    .addClass("media-body");
      var subMediaLeft = $("<div></div>")
          .addClass("media-left")
          .addClass("media-middle");
      var subMediaBody = $("<div></div>")
          .addClass("media-body");
      a3.append(img4);
      a4.append(name);
      subMediaLeft.append(a3);
      subMediaBody.append(a4);
//            subMedia.append(a3).append(a4)
      subMedia.append(subMediaLeft).append(subMediaBody)
      a1.append(img1);
//            a2.append(status).append(img4).append(name);
      a2.append(status);
      mediaLeft.append(a1);
      mediaBody.append(a2).append(subMedia)
      media.append(mediaLeft).append(mediaBody);
//            var container = $("<div></div>");
//            a.append(status).append(img1).append(img4);
//            a.append(media);
//            container.append(a);
//            $("#displayer").append(container);
      $(mediaList).append(media);
    }
  }
}
function displayGamesStreams3(response) {
  if (response.hasOwnProperty("streams") && response.streams.length > 0) {

//          <div class="text-center headerContainer">
//        <h1 class="text-center"> Twitch.tv API test</h1>

    var gameTitle = $(
        '<div class="text-center headerContainer">' +
        '<h1>' +
        response.streams[0].game +
        '</h1>' +
        '</div>'
        );
//    var game = response.streams[0].game;
//    var gameTitle = $("<h1></h1>").text(game);
    $("#displayer").append(gameTitle);
    var mediaList = $("<ul></ul>").addClass("media-list");
    $("#displayer").append(mediaList);
    for (var i = 0; i < response.streams.length; i++) {

//            var nestedHtml = $(
      var media = $(
//          '<li class="media">' +
          '<div class="media col-xs-12 col-sm-12 col-md-6">' +
//          '<div class="media col-xs-12 col-sm-12 col-md-6 col-lg-4">' +
          '<div class="media-left media-middle">' +
          '<a href="' + response.streams[i].channel.url + '">' +
          '<img class="media-object" src="' + response.streams[i].preview.large + '">' +
//          '<img class="media-object img-responsive" src="' + response.streams[i].preview.large + '">' +
          '</a>' +
          '</div>' +
          '<div class="media-body">' +
          '<a href="' + response.streams[i].channel.url + '">' +
//          '<h4 class="media-heading">' + response.streams[i].channel.status + '</h4>' +
          '<h4 class="media-heading">' +
          '<a href="' + response.streams[i].channel.url + '">'
          + response.streams[i].channel.status +
          '</a>' +
          '</h4>' +
//          '<h4 class="">' + response.streams[i].channel.status + '</h4>' +
          '</a>' +
//          '<h6 class="media-heading">' + response.streams[i].viewers + '</h6>' +
//          '<h6 class="">' + response.streams[i].viewers + '</h6>' +
          '<span class="badge">' + response.streams[i].viewers + ' viewers' + '</span>' +
          '<div class="media">' +
          '<div class="media-left media-middle">' +
          '<a href="' + response.streams[i].channel.url + '/profile' + '">' +
          '<img class="media-object subMedia" src="' + response.streams[i].channel.logo + '">' +
//          '<img class="media-object subMedia img-responsive" src="' + response.streams[i].channel.logo + '">' +
          '</a>' +
          '</div>' +
          '<div class="media-body">' +
          '<h5 class="media-heading">' +
          '<a href="' + response.streams[i].channel.url + '/profile' + '">' +
          response.streams[i].channel.display_name +
          '</a>' +
          '</h5>' +
          '<span class="badge">' + response.streams[i].channel.views + ' views' + '</span>' +
          '<br>' +
          '<span class="badge">' + response.streams[i].channel.followers + ' followers' + '</span>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</li>');
      $(mediaList).append(media);
    }
  }
}
function getGamesStreams(GAME, LIMIT) {
  JSONP(
      "streams",
      {
        game: GAME,
        limit: LIMIT,
        stream_type: "live"
      },
  displayGamesStreams
      );
}
function getTopGames(LIMIT) {
  JSONP(
      "games/top",
      {
        limit: LIMIT,
      },
      displayTopGames
      );
}
//function searchGames(query, LIVE) {
function searchGames(query) {
  JSONP(
      "search/games",
      {
        q: query,
        type: "suggest",
//                live:"true"
      },
      displaySearchGames
      );
}
function searchGamesOffline(query) {
  JSONP(
      "search/games",
      {
        q: query,
        type: "suggest",
        live: "false"
      },
  displaySearchGames
      );
}
function JSONP(directory, DATA, callback) {
  $.ajax({
    url: "https://api.twitch.tv/kraken/" + directory,
    data: DATA,
    dataType: 'jsonp',
    success: callback,
    error: function () {
    }
  });
}
$(document).ready(function () {
  getTopGames(25);
//  getTopGames(5);
//    searchGames("star");
  //  searchGames("doom");
//    getTopGames(5);
//    getGamesStreams("Doom");
});