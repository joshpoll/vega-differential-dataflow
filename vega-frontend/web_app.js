"use strict";
var connect = function (addr, onFiles, onClose) {
    var ws = new WebSocket(addr);
    ws.onopen = function () { return console.log("socket opened"); };
    ws.onmessage = function (e) {
        var parsed = JSON.parse(e.data);
        onFiles(parsed);
    };
    ws.onclose = function () {
        onClose();
    };
    ws.onerror = function (e) {
        console.error("socket error", e);
    };
};
