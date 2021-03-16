angular.module('listaTelefonica')     // Busca o modulo
.controller('listaTelefonicaCtrl', function($scope, uppercaseFilter) { // Criação do controller. o $scope deve ser injetado
    $scope.app = 'Lista Telefônica';
    $scope.contatos = [
        {nome: uppercaseFilter('Pedro'), telefone: '99998888', cor: 'yellow', operadora: {codigo: 1, nome: 'Oi'}, data: new Date()},
        {nome: 'Ana', telefone: '99998877', cor: 'red', operadora: {codigo: 2, nome: 'Vivo'}, data: new Date()},
        {nome: 'Maria', telefone: '99998866', cor: 'purple', operadora: {codigo: 3, nome: 'Tim'}, data: new Date()},
        {nome: 'Antonio Carlos Roberto Cunha Souza da Silva', telefone: '99998855', cor: 'blue', operadora: {codigo: 1, nome: 'Oi'}, data: new Date()},
    ];
    $scope.operadoras = [
        {codigo: 1, nome: 'Oi', preco: 2},
        {codigo: 2, nome: 'Vivo', preco: .5},
        {codigo: 3, nome: 'Tim', preco: 1.5},
    ];

    $scope.atributo = 'nome';

    $scope.adicionarContato = function(contato) {
        contato.data = new Date();
        $scope.contatos.push(contato);
        if ($scope.contato && $scope.contato.operadora && $scope.contato.operadora.codigo) {
            $scope.contato.operadora = $scope.operadoras.find(function(o) {
                return o.codigo === $scope.contato.operadora.codigo;
            });
        }
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };

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
