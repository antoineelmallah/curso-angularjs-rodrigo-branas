angular.module('listaTelefonica')     
// Injetando o objeto 'operadoras' recuperado pelo 'resolve' do 'routeConfig'.
.controller('novoContatoCtrl', function($scope, $location, config, serialGenerator, operadoras) { 
    
    $scope.error = 'Ocorreu um erro!!!';

    $scope.app = config.nomeSistema;
    $scope.contatos = [];

    $scope.operadoras = operadoras;

    $scope.atributo = 'nome';

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

});
