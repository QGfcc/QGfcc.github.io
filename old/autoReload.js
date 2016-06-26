/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function autoRefresh() {
    setTimeout(function () {
            window.location.reload(1);
    }, 1500);
}
$(document).ready(function () {
    var autoRefreshVal = getCookie("autoRefresh");
    if (autoRefreshVal === "") { //default value
        setCookie("autoRefresh", 1, 365);
    } else if (autoRefreshVal == "1") { // if on
        autoRefresh();
    }
    $("*").keydown(function (event) {
        if (event.key === "a") {
            setCookie("autoRefresh", 1, 365);
            window.location.reload(1);
        }
        if (event.key === "z") {
            setCookie("autoRefresh", 0, 365);
        }
        if (event.key === "e") {
            window.location.reload(1);
        }
    });
});