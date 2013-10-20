var demo = angular.module('demo', []);

demo.controller('DemoCtrl', function($scope, $http) {
    
    $scope.person = {};
    $scope.persons = [];

    $scope.add = function() {
        $scope.persons.push(angular.copy($scope.person));        
        $scope.person.first = '';
        $scope.person.last = '';
        angular.element('#firstname').focus();
    }

    $scope.saveList = function() {
        $http.post('save.php', $scope.persons);
    }

    $scope.loadList = function() {
        $http.get('save.php')
            .success(function(result) {
                $scope.persons = result;        
            });
    };
});
