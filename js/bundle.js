(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var n = 200;
var a = 0;
var items = document.querySelector('.items');
var total = document.querySelector('.total');
var count = document.querySelector('.count');
total.textContent = n;
count.textContent = a;

var _loop = function _loop(i) {
    var item = document.createElement('div');
    item.className = 'item';
    //item.textContent = i;

    var img = document.createElement('img');
    img.onerror = function () {
        item.textContent = i;
    };
    img.src = '/pokerrordex/img/error-' + i + '.jpg';
    img.alt = '' + i;

    img.onload = function () {
        item.appendChild(this);
        count.textContent = Number(count.textContent) + 1;
    };
    items.appendChild(item);
};

for (var i = 1; i <= n; i++) {
    _loop(i);
}

},{}]},{},[1]);
