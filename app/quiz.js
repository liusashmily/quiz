angular.module('Quiz', [

    ])
    .controller('MainCtrl', function($scope) {
        $scope.categories = [{
            "id": 0,
            "name": "DrawSomething"
        }, {
            "id": 1,
            "name": "MultipleChoice"
        }, {
            "id": 2,
            "name": "Matching"
        }, {
            "id": 3,
            "name": "ShortAnswer"
        }, {
            "id": 4,
            "name": "MediaQuestion"
        }];

        $scope.quizs = [{
            "id": 0,
            "title": "AngularJS",
            "description": "http://angularjs.org",
            "category": "DrawSomething"
        }, {
            "id": 1,
            "title": "Egghead.io",
            "description": "http://egghead.io",
            "category": "MultipleChoice"
        }, {
            "id": 2,
            "title": "A List Apart",
            "description": "http://alistapart.com/",
            "category": "Matching"
        }, {
            "id": 3,
            "title": "One Page Love",
            "description": "http://onepagelove.com/",
            "category": "ShortAnswer"
        }, {
            "id": 4,
            "title": "MobilityWOD",
            "description": "http://www.mobilitywod.com/",
            "category": "MediaQuestion"
        }, {
            "id": 5,
            "title": "Robb Wolf",
            "description": "http://robbwolf.com/",
            "category": "MultipleChoice"
        }, {
            "id": 6,
            "title": "Senor Gif",
            "description": "http://memebase.cheezburger.com/senorgif",
            "category": "DrawSomething"
        }, {
            "id": 7,
            "title": "Wimp",
            "description": "http://wimp.com",
            "category": "Matching"
        }, {
            "id": 8,
            "title": "Dump",
            "description": "http://dump.com",
            "category": "ShortAnswer"
        }];

        $scope.currentCategory = null;

        function setCurrentCategory(category) {
            $scope.currentCategory = category;
            cancelEditing();
            cancelCreating();
        }

        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }

        // Make setCurrentCategory to public
        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;

        // CRUD
        function resetCreateForm() {
            $scope.newQuiz = {
                title: '',
                description: '',
                category: $scope.currentCategory
            }
            console.log("resetCreateForm" + $scope.currentCategory.name);
        }

        function createQuiz (quiz) {
            quiz.id = $scope.quizs.length;
            quiz.category = $scope.currentCategory;
            console.log("createQuiz" + quiz.category.name);
            $scope.quizs.push(quiz);
            console.log("createQuiz-quizs:" +  $scope.quizs);

            resetCreateForm();
        }

        $scope.createQuiz = createQuiz;

        // Creating and Editing States
        $scope.isCreating = false;
        $scope.isEditing = false;

        function startCreating () {
            $scope.isCreating = true;
            $scope.isEditing = false;

         //   resetCreateForm();
        }

        function cancelCreating () {
            $scope.isCreating = false;
        }

        function startEditing () {
            $scope.isCreating = false;
            $scope.isEditing = true;
        }

        function cancelEditing () {
            $scope.isEditing = false;
        }

        function shouldShowCreating() {
            return $scope.currentCategory && !$scope.isEditing;
        }

        function shouldShowEditing() {
            return $scope.isEditing && !$scope.isCreating;
        }

        $scope.startCreating = startCreating;
        $scope.cancelCreating = cancelCreating;
        $scope.startEditing = startEditing;
        $scope.cancelEditing = cancelEditing;
        $scope.shouldShowEditing = shouldShowEditing;
        $scope.shouldShowCreating = shouldShowCreating;



    });
