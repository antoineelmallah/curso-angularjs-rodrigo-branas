angular.module('listaTelefonica').controller('detalhesContatoCtrl', function($scope, contato) {

    var _init = function() {
        $scope.contato = contato;
    };

    _init();

});