angular.module('listaTelefonica')     // Busca o modulo
.controller('listaTelefonicaCtrl', function($scope, config, serialGenerator, contatos) { // Criação do controller. o $scope deve ser injetado
    
    $scope.error = 'Ocorreu um erro!!!';

    $scope.app = config.nomeSistema;
    $scope.contatos = contatos;

    $scope.atributo = 'nome';

    $scope.apagarSelecionados = function(contatos) {
        $scope.contatos = contatos.filter(function(c) {
            return !c.selecionado;
        });
        $scope.hasContatoSelecionado = false;
    };

    var contador = 0;
    $scope.verificarContatoSelecionado = function(contatos) {
        console.log(contador++);
        $scope.hasContatoSelecionado = contatos.some(function(c) { 
            return c.selecionado; 
        });
    };

    $scope.ordenarPor = function(atributo) {
        if (atributo === $scope.atributo)
            $scope.sentidoOrdenacao = !$scope.sentidoOrdenacao;
        $scope.atributo = atributo;
    };

    /* Substitui a referência da variável $scope.contatos por uma cópia dela para testar 
    a performance da renderização dos dados na tabela, sem e com uso do 'track by' no 
    ng-repeat. Sem usar o track by, todos os itens da tabela são renderizados novamente.
    com o track by, nenhum item é renderizado novamente.
    */
    $scope.reset = function() {
        $scope.contatos = angular.copy($scope.contatos);
    };
    
    /* Altera somente o primeiro contato para garantir que usando o track by ele continuará
    sendo renderizado na lista. */
    $scope.alterarOPrimeiro = function() {
        $scope.contatos = angular.copy($scope.contatos);
        $scope.contatos[0].nome = 'aaaaaaaa';
    };

    console.log(serialGenerator.generate());

});
