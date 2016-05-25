'use strict';

var angular = require('angular'),
    module;

require('angular-ui-router');

module = angular.module('app', [
  'ui.router'
]);

module.config([
  '$controllerProvider',
  '$compileProvider',
  '$filterProvider',
  '$provide',

  function($controllerProvider, $compileProvider, $filterProvider, $provide) {

    module.controller = $controllerProvider.register;
    module.directive = $compileProvider.directive;
    module.filter = $filterProvider.register;
    module.factory = $provide.factory;
    module.service = $provide.service;

  }

]);
