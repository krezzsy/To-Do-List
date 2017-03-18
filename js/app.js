/**
 * Created by Gleb Melnichenko on 18.03.2017.
 */

angular.module('to-do-list', ['ngRoute'])
    .config(function ($routeProvider) {
        'use strict';

        var routeConfig = {
            controller: 'controller',
            templateUrl: 'to-do-list-index.html',
            resolve: {
                store: function (todoStorage) {
                    return todoStorage.then(function (module) {
                        module.get();
                        return module;
                    });
                }
            }
        };

        $routeProvider
            .when('/', routeConfig)
            .when('/:status', routeConfig)
            .otherwise({
                redirectTo: '/'
            });
    });
