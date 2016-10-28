(function () {
    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics'];
    
        function QuizController(quizMetrics) {
            this.quizMetrics = quizMetrics;
        };
})();