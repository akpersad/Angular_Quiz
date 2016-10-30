(function() {
    angular
        .module("turtleFacts")
        .controller("resultsCtrl", ResultsController);

    ResultsController.$inject = ['quizMetrics', 'DataService'];

    function ResultsController(quizMetrics, DataService) {
        this.quizMetrics = quizMetrics;
        this.dataService = DataService;
    }
})();