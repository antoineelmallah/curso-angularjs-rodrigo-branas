angular.module('listaTelefonica').directive('uiAlert', function() {
    return {
        // Podemos usar template e especificar o código html diretamente ou templateUrl e fazer referência à um arquivo html.
        templateUrl: 'view/alert.html',
        // Substitui o elemento externo da diretiva se for true. Não é muito utilizado
        replace: true, 
        /* 
        Restringe o local onde a diretiva pode ser utilizada. 
        Atributo (A), elemento (E), classe (C), comentário (M) ou combinação deles. 
        Em geral, quando usamos a diretiva para agregar funcionalidades a um elemento, colocamos ela como 'A'.
        Caso a diretiva se comporte como um elemento (ex: um modal, acordion, etc), criamos como 'E'. */
        restrict: 'AE', 
        /*
        Se presente, cria um scope isolado. Nesse caso, a diretiva deixa de ter acesso ao scope mais externo.
        OBS: O parâmetro da diretiva e a propriedade do seu scope podem ter nomes diferentes. Nesse caso, colocamos 
        "title: '@topic'" ou "message: @error", por exemplo. À esquerda refere-se à propriedade do escopo da diretiva e 
        à direita ao mapeamento do atributo. */
        scope: {
            title: '@', // O '@' seta a string definida no parâmetro title para a propriedade title do scope da diretiva.
        //    message: '=', // O '=' cria um vinculo bi-direcional entre o parâmetro message e a propriedade message do scope da diretiva.
        },
        /*
        Se for true, recupera o que foi preenchido no innerHtml do elemento da diretiva. Para acessar o valor definido no innerHtml, no
        template da diretiva, usamos o ng-transclude.*/
        transclude: true,
    };
});