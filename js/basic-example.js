(function () {
  'use strict';

  angular.module('demoApp')
    .controller('BasicExampleCtrl', ['$scope' , '$http' , function ($scope , $http) {
      $scope.remove = function(scope) {
        scope.remove();
      };

      $scope.toggle = function(scope) {
        scope.toggle();
      };

      $scope.moveLastToTheBeginning = function () {
        var a = $scope.data.pop();
        $scope.data.splice(0,0, a);
      };

      $scope.newSubItem = function(scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id * 10 + nodeData.nodes.length,
          title: nodeData.title + '.' + (nodeData.nodes.length + 1),
          nodes: []
        });
      };

      $scope.collapseAll = function() {
        $scope.$broadcast('collapseAll');
      };

      $scope.expandAll = function() {
        $scope.$broadcast('expandAll');
      };
  
          
          // Simple GET request example :
        $http.get('Options.json').
          success(function(data, status, headers, config) {
            $scope.data = data;
          }).
          error(function(data, status, headers, config) {
            console.log(data);
          });
        
        
    }]);

}());