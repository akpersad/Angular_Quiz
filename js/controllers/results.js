(function() {
    angular
        .module("turtleFacts")
        .controller("resultsCtrl", ResultsController);

    ResultsController.$inject = ['quizMetrics', 'DataService'];

    function ResultsController(quizMetrics, DataService) {
        this.quizMetrics = quizMetrics;
        this.dataService = DataService;
        this.activeQuestion = 0;
        this.getAnswerClass = getAnswerClass;
        this.setActiveQuestion = setActiveQuestion;
        this.calculateScore = calculateScore;

        function getAnswerClass(index) {
            if(index === quizMetrics.correctAnswers[this.activeQuestion]) {
                return "bg-success";
            } else if(index === DataService.quizQuestions[this.activeQuestion].selected) {
                return "bg-danger";
            }
        }

        function setActiveQuestion(index) {
            this.activeQuestion = index;
        }

        function calculateScore() {
            return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
        }
    }
})();