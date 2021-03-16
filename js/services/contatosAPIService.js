// Função fabrica
angular.module('listaTelefonica').factory('contatosAPI', function(uppercaseFilter) {

    var _getContatos = function() {
        return [
            {nome: uppercaseFilter('Pedro'), telefone: '99998888', cor: 'yellow', operadora: {codigo: 1, nome: 'Oi'}, data: new Date()},
            {nome: 'Ana', telefone: '99998877', cor: 'red', operadora: {codigo: 2, nome: 'Vivo'}, data: new Date()},
            {nome: 'Maria', telefone: '99998866', cor: 'purple', operadora: {codigo: 3, nome: 'Tim'}, data: new Date()},
            {nome: 'Antonio Carlos Roberto Cunha Souza da Silva', telefone: '99998855', cor: 'blue', operadora: {codigo: 1, nome: 'Oi'}, data: new Date()},
        ];
    };

    return {
        getContatos: _getContatos,
    };
});