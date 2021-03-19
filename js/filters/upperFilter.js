angular.module('listaTelefonica').filter('upper', function() {

    var _counter = 0;

    return function(input) {
        console.log(_counter++)
        if (!input) return '';
        return input.toUpperCase();
    }
});