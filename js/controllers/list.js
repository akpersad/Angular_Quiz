(function(){
    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);
    
    function ListController() {
        this.dummyData = "hello world";
    }
})();