myAppModule.controller('TextController',
    function($scope) {

        var someText = {};
        someText.message = 'You have started your Journey';

        var students = [{name:'David', id:'1'},
            {name:'Nicola', id:'2'},
            {name:'Thomas', id:'3'}];


        $scope.someText = someText;
        $scope.students = students;
    });

myAppModule.controller('AddUserController',
    function($scope) {

    $scope.message = '';

    $scope.addUser = function() {
        $scope.message = 'Thanks, ' + $scope.user.first + ' ' + $scope.user.last + ' We added you!';
    };
});