(function() {
    angular
        .module("turtleFacts")
        .controller("resultsCtrl", ResultsController);

    ResultsController.$inject = ['quizMetrics'];

    function ResultsController(quizMetrics) {
        this.quizMetrics = quizMetrics;
    }
})();