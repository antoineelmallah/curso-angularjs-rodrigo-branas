// Função fabrica
angular.module('listaTelefonica').factory('contatosAPI', function(uppercaseFilter, serialGenerator) {

    var _contatos = [
        {id: 1, serial: serialGenerator.generate(), nome: uppercaseFilter('Pedro'), telefone: '99998888', cor: 'yellow', operadora: {codigo: 1, nome: 'Oi'}, data: new Date()},
        {id: 2, serial: serialGenerator.generate(), nome: 'Ana', telefone: '99998877', cor: 'red', operadora: {codigo: 2, nome: 'Vivo'}, data: new Date()},
        {id: 3, serial: serialGenerator.generate(), nome: 'Maria', telefone: '99998866', cor: 'purple', operadora: {codigo: 3, nome: 'Tim'}, data: new Date()},
        {id: 4, serial: serialGenerator.generate(), nome: 'Antonio Carlos Roberto Cunha Souza da Silva', telefone: '99998855', cor: 'blue', operadora: {codigo: 1, nome: 'Oi'}, data: new Date()},
    ];

    var _getContatos = function() {
        return _contatos;
    };

    var _getContato = function(id) {
        return _contatos.find(function(c) {
            return c.id === id;
        });   
    };

    return {
        getContatos: _getContatos,
        getContato: _getContato,
    };
});