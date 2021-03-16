angular.module('listaTelefonica')     // Busca o modulo
.controller('listaTelefonicaCtrl', function($scope, contatosAPI, operadorasAPI, config, serialGenerator) { // Criação do controller. o $scope deve ser injetado
    
    $scope.app = config.nomeSistema;
    $scope.contatos = [];
    $scope.operadoras = [];

    console.log(serialGenerator.generate());

    $scope.atributo = 'nome';

    var init = function() {
        $scope.contatos = contatosAPI.getContatos();
        $scope.operadoras = operadorasAPI.getOperadoras();
    };

    $scope.adicionarContato = function(contato) {
        contato.serial = serialGenerator.generate();
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

    init();
    
});
