angular.module('listaTelefonica')     // Busca o modulo
.controller('listaTelefonicaCtrl', function($scope, config, serialGenerator, contatos) { // Criação do controller. o $scope deve ser injetado
    
    $scope.error = 'Ocorreu um erro!!!';

    $scope.app = config.nomeSistema;
    $scope.contatos = contatos;

    console.log(serialGenerator.generate());

    $scope.atributo = 'nome';

    $scope.apagarSelecionados = function(contatos) {
        $scope.contatos = contatos.filter(function(c) {
            return !c.selecionado;
        });
    };

    $scope.algumSelecionado = function(contatos) {
        // some: Se um dos contatos estiver selecionado, retorna true
        return contatos.some(function(c) { 
            return c.selecionado; 
        });
    };

    $scope.ordenarPor = function(atributo) {
        if (atributo === $scope.atributo)
            $scope.sentidoOrdenacao = !$scope.sentidoOrdenacao;
        $scope.atributo = atributo;
    };

});
