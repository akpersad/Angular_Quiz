(function(){
    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);
    
    function ListController($scope) {
        $scope.dummyData = "hello world";
    }
})