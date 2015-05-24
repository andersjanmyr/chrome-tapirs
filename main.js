// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
"use strict";

var req = new XMLHttpRequest();
req.open( "GET", "http://tapirs.janmyr.com/facts/random", true);
req.onload = showTapir;
req.onerror = showError;
req.send(null);

function showTapir() {
    console.log(req);
    var text = JSON.parse(req.responseText).fact;
    var node = document.createTextNode(text);
    var panel = document.getElementById('fact');
    panel.appendChild(node);
}

function showError() {
    var node = document.createTextNode('Unable to contact the Tapir server!');
    var panel = document.getElementById('fact');
    panel.appendChild(node);
}

