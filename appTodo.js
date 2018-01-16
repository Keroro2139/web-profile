angular.module('TodoApp', [])
	.service('TodoService', function() {
		var text = this

		text.titles = [
			{ title: 'Watching Movie', check: false },
			{ title: 'Swimming', check: true }
		]

		text.list = function() {
			return text.titles
		}

		text.add = function(word) {
			if(word.title != null && word.title != '')
				return text.titles.push(word)
		}

		text.ch = function(ch) {
			if(ch.check)
				ch.check = false
			else 
				ch.check = true
		}
	})


	.controller('showListController', function($scope, TodoService) {
     	$scope.titles = TodoService.list()
  	})

	.controller('checkController', function($scope, TodoService) {
		$scope.checkDone = function(ch) {
			if(ch.check)
				ch.check = false
			else
				ch.check = true
		}
	})

	.controller('addTextController', function($scope, TodoService) {
		$scope.save = function() {
			var word = {
				title : $scope.title,
				check : false
			}
			TodoService.add(word)
			$scope.title = null
		}
		
	})
