angular.module('listaTelefonica').factory('jsonplaceholderAPI', function($http) {

    var _todos = function() {
        return $http.get('https://jsonplaceholder.typicode.com/todosa');
    };

    var _byId = function(id) {
        return $http.get('https://jsonplaceholder.typicode.com/todos/'+id);
    }

    return {
        todos: _todos,
        byId: _byId,
    };

});