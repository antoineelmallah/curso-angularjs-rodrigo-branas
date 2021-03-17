// É necessário ter uma diretiva mais externa para criar a comunicação entre as internas
angular.module('listaTelefonica').directive('uiAccordions', function() {
    return {
        /*
        O atributo 'controller' define uma função construtora. Dessa forma, só será possível 
        visualizar o que estiver sendo atribuido à 'this'. */
        controller: function($scope, $element, $attrs) {

            var accordions = [];

            this.registerAccordion = function(accordion) {
                accordions.push(accordion);
            };

            this.closeAll = function() {
                accordions.forEach(function(accordion) {
                    accordion.opened = false;
                });
            };

        }
    };
});

// Diretivas internas que devem se comunicar entre si, através da mais externa
angular.module('listaTelefonica').directive('uiAccordion', function() {
    return {
        templateUrl: 'view/accordion.html',
        transclude: true,
        require: '^uiAccordions', // Assim referenciamos a diretiva pai
        scope: {
            title: '@',
        },
        link: function(scope, element, attrs, ctrl) {

            ctrl.registerAccordion(scope);
            
            scope.open = function() {
                ctrl.closeAll();
                scope.opened = true;
            };

        }
    };
});