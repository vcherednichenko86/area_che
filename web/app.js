var areaCheApp = angular.module('areaCheApp', [
    'ngRoute',
    'areaCheControllers'
]);

areaCheApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

areaCheApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'index.html',
                controller: 'IndexCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);
