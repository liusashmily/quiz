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
            "url": "http://angularjs.org",
            "category": "DrawSomething"
        }, {
            "id": 1,
            "title": "Egghead.io",
            "url": "http://egghead.io",
            "category": "MultipleChoice"
        }, {
            "id": 2,
            "title": "A List Apart",
            "url": "http://alistapart.com/",
            "category": "Matching"
        }, {
            "id": 3,
            "title": "One Page Love",
            "url": "http://onepagelove.com/",
            "category": "ShortAnswer"
        }, {
            "id": 4,
            "title": "MobilityWOD",
            "url": "http://www.mobilitywod.com/",
            "category": "MediaQuestion"
        }, {
            "id": 5,
            "title": "Robb Wolf",
            "url": "http://robbwolf.com/",
            "category": "MultipleChoice"
        }, {
            "id": 6,
            "title": "Senor Gif",
            "url": "http://memebase.cheezburger.com/senorgif",
            "category": "DrawSomething"
        }, {
            "id": 7,
            "title": "Wimp",
            "url": "http://wimp.com",
            "category": "Matching"
        }, {
            "id": 8,
            "title": "Dump",
            "url": "http://dump.com",
            "category": "ShortAnswer"
        }];

        $scope.currentCategory = null;



    });
