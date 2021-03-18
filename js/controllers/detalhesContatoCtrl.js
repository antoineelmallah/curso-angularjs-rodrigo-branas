angular.module('listaTelefonica').controller('detalhesContatoCtrl', function($scope, contato, jsonplaceholderAPI) {

    var _init = function() {
        $scope.contato = contato;
        jsonplaceholderAPI.todos().then(function(result) {
            $scope.todos = result.data;
            console.log($scope.todos);
        });
    };

    _init();

});