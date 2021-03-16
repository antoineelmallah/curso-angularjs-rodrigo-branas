// Função construtora
angular.module('listaTelefonica').service('operadorasAPI', function() {

    this.getOperadoras = function() {
        return [
            {codigo: 1, nome: 'Oi', preco: 2},
            {codigo: 2, nome: 'Vivo', preco: .5},
            {codigo: 3, nome: 'Tim', preco: 1.5},
        ];
    };

});