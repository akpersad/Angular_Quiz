(function () {
    angular
        .module("doctorFacts")
        .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics', "DataService"];

    function ListController(quizMetrics, DataService) {
        this.quizMetrics = quizMetrics;
        this.data = DataService.turtlesData;
        this.activeTurtle = {};
        this.search = "";
        this.activateQuiz = activateQuiz;
        this.changeActiveTurtle = changeActiveTurtle;

        function changeActiveTurtle(index) {
            this.activeTurtle = index;
        }

        function activateQuiz() {
            quizMetrics.changeState("quiz", true);
        }
    }

})();