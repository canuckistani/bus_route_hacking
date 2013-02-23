#!/usr/bin/env node

var util = require('util'),
    fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

var L = console.log,
    D = function(o) { L(util.inspect(o)); },
    F = function(s) { return util.format.apply(null, arguments); };



var raw = fs.readFileSync('./data/scraped.txt', 'utf8');

var routes = raw.split(/Route [\d]{3}/g);

var test  = routes[1];

// var pp = function(o) { return JSON.stringify(o,null,'  ')};

var m = test.match(/Characteristics([\S\s]+?)?Productivity/g);

// L(m[0]);

var lines = m[0].split("\n");

L(lines.length);

// L(lines);

var pp = function(o) { return JSON.stringify(o,null,'  ')};

_.each(lines, function(line) {
    var _fields = _.compact(line.split(/[\ ]{2}/));

    if (_fields.length > 2) {
        L(pp(_fields));
    }
});
