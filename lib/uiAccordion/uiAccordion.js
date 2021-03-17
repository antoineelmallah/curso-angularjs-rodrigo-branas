angular.module('uiAccordion', []);

// Bloco de inicialização do módulo
angular.module('uiAccordion').run(function($templateCache) {
    // O '$templateCache.put' adiciona o template no cache de templates
    $templateCache.put('view/accordion.html', 
    `<div class="ui-accordion-title" 
        ng-class="{ 'ui-accordion-title-opened': opened, 'ui-accordion-title-closed': !opened }" 
        ng-click="open()">{{ title }}</div>
     <div class="ui-accordion-content" ng-if="opened" ng-transclude></div>`)
});

// É necessário ter uma diretiva mais externa para criar a comunicação entre as internas
angular.module('uiAccordion').directive('uiAccordions', function() {
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
angular.module('uiAccordion').directive('uiAccordion', function() {
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