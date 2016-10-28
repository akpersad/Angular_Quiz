(function () {
    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', "DataService"];

    function QuizController(quizMetrics, DataService) {
        this.quizMetrics = quizMetrics;
        this.dataService = DataService;
        this.activeQuestion = 0;
        this.questionAnswered = questionAnswered;
        this.setActiveQuestion = setActiveQuestion;
        this.selectAnswer = selectAnswer;

        var numQuestionsAnswered = 0;

        function setActiveQuestion(index) {
            if (index === undefined){
                var breakOut = false;
                var quizLengthAdjusted = DataService.quizQuestions.length - 1;

                while (!breakOut) {
                    this.activeQuestion = this.activeQuestion < quizLengthAdjusted ? ++this.activeQuestion : 0;

                    if (DataService.quizQuestions[this.activeQuestion].selected === null) {
                        breakOut = true;
                    }
                }
            }else {
                this.activeQuestion = index;
            }
        }

        function questionAnswered() {
            var quizLength = DataService.quizQuestions.length;
            if (DataService.quizQuestions[this.activeQuestion].selected !== null) {
                numQuestionsAnswered++;
                if (numQuestionsAnswered >= quizLength) {
                    //Placeholder
                }
            }
            this.setActiveQuestion();
        }

        function selectAnswer(index) {
            DataService.quizQuestions[this.activeQuestion].selected = index;
        }
    }
})();