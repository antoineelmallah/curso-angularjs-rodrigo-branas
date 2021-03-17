angular.module('listaTelefonica')     // Busca o modulo
.controller('novoContatoCtrl', function($scope, $location, operadorasAPI, config, serialGenerator) { // Criação do controller. o $scope deve ser injetado
    
    $scope.error = 'Ocorreu um erro!!!';

    $scope.app = config.nomeSistema;
    $scope.contatos = [];
    $scope.operadoras = [];

    $scope.atributo = 'nome';

    var init = function() {
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
        $location.path('/contatos');
    };

    init();
    
});
