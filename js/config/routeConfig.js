angular.module('listaTelefonica').config(function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/contatos', {
            templateUrl: 'view/contatos.html',
            controller: 'listaTelefonicaCtrl',
            resolve: {
                contatos: function(contatosAPI) {
                    return contatosAPI.getContatos();
                }
            }
        })
        .when('/novoContato', {
            templateUrl: 'view/novoContato.html',
            controller: 'novoContatoCtrl',
            // Podemos inicializar dependências do controller no resolve. O objeto 'operadoras' poderá ser injetado
            // no controller e estará populado. 
            resolve: {
                operadoras: function(operadorasAPI) {
                    return operadorasAPI.getOperadoras();
                }
            }
        })
        .when('/detalhesContato/:id', {
            templateUrl: 'view/detalhesContato.html',
            controller: 'detalhesContatoCtrl',
            resolve: {
                contato: function(contatosAPI, $route) {
                    var id = parseInt($route.current.params.id);
                    return contatosAPI.getContato(id);
                }
            }
        })
        .when('/error', {
            templateUrl: 'view/error.html'
        })
        .otherwise({redirectTo: '/contatos'});

});