var demo = angular.module('demo', []);

demo.controller('DemoCtrl', function($scope, $http) {
    
    $scope.person = {
        first: 'Sebastian',
        last: 'Mancke'
    };

});
