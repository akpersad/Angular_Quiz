(function () {
    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', "DataService"];

    function QuizController(quizMetrics, DataService) {
        this.quizMetrics = quizMetrics;
        this.dataService = DataService;
    };
})();