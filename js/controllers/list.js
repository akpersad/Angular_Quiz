(function () {
    angular
        .module("doctorFacts")
        .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics', "DataService"];

    function ListController(quizMetrics, DataService) {
        this.quizMetrics = quizMetrics;
        this.data = DataService.doctorWhoData;
        this.activeDoctor = {};
        this.search = "";
        this.activateQuiz = activateQuiz;
        this.changeActiveDoctor = changeActiveDoctor;

        function changeActiveDoctor(index) {
            this.activeDoctor = index;
        }

        function activateQuiz() {
            quizMetrics.changeState("quiz", true);

            $(function() {
                $('#flash').delay(500).fadeIn('normal', function() {
                    $(this).delay(3000).fadeOut();
                });
            });
        }
    }

})();