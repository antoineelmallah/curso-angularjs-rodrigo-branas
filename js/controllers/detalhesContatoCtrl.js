angular.module('listaTelefonica').controller('detalhesContatoCtrl', function($scope, $routeParams, contatosAPI) {

    var _init = function() {
        var id = parseInt($routeParams.id);
        $scope.contato = contatosAPI.getContato(id);
    };

    _init();

});